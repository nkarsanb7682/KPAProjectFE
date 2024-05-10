import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';
import { AirportVM } from '../models/AirportVM';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-data-display-edit',
  standalone: true,
  imports: [TreeTableModule, FormsModule, CommonModule],
  templateUrl: './data-display-edit.component.html',
  styleUrl: './data-display-edit.component.scss'
})


export class DataDisplayEditComponent implements OnInit {
  @Input() airportData!: AirportVM[];

  cols!: Column[];
  airportDataTreeNode!: TreeNode<AirportVM>[];

  ngOnInit() {
    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'code', header: 'Code'},
      {field: 'name', header: 'Name'}
    ];
  }

  ngOnChanges() {
    this.airportDataTreeNode = this.convertToTreeNodeList(this.airportData);
  }


convertToTreeNodeList(airportList: AirportVM[]): TreeNode[] {
    const treeNodeList: TreeNode[] = [];

    airportList.forEach((airport) => {
        // Create a TreeNode for the airport
        const airportNode: TreeNode = {
            key: airport.id.toString(),
            label: airport.name, 
            data: airport,
            children: [],
        };

        airport.flights.slice(0, 5).forEach((flight, index) => {
            // Create a TreeNode for the flight
            const flightNode: TreeNode = {
                key: `${airport.id}_flight_${index}`, 
                label: `Flight ${index + 1}`,
                data: flight,
                leaf: true,
            };

            airportNode.children?.push(flightNode);
        });

        treeNodeList.push(airportNode);
    });

    return treeNodeList;
}




}

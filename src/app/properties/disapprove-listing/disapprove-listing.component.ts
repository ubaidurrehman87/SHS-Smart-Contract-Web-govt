import { Component, OnInit } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Property } from '../../models/property/property.model';
import { PropertyApiService } from 'src/app/services/property/property-api.service';
import { NzModalService } from 'ng-zorro-antd';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

interface Data {
  name: string;
  age: number;
  address: string;

  // tslint:disable-next-line:no-any
  [key: string]: any;
}


@Component({
  selector: 'app-disapprove-listing',
  templateUrl: './disapprove-listing.component.html',
  styleUrls: ['./disapprove-listing.component.scss']
})
export class DisapproveListingComponent implements OnInit {

  properties : Property[];
  sales : Property[]
  rentals : Property[]
  currentId: string;

  constructor(
    private PropertyApiService : PropertyApiService,
    private modalService: NzModalService,
    private toast : ToastrService
    ) { }

  ngOnInit() {
    this.refreshPropertList();
  }
  refreshPropertList(){
    this.PropertyApiService.getProperty().subscribe((data : Property[])=>{
      this.sales = data.filter((property : Property)=>{
        return property.type == 'sales' && property.approveStatus == "disapproved"
      })
      this.rentals = data.filter((property : Property)=>{
        return property.type == 'rentals' && property.approveStatus == "disapproved"
      })
    })
  }
  // listOfSearchName: string[] = [];
  // listOfSearchAddress: string[] = [];
  // listOfFilterName = [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }];
  // listOfFilterAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  // listOfData: Data[] = [
  //   {
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park'
  //   },
  //   {
  //     name: 'Jim Red',
  //     age: 32,
  //     address: 'London No. 2 Lake Park'
  //   }
  // ];
  // listOfDisplayData = [...this.listOfData];
  // mapOfSort: { [key: string]: string | null } = {
  //   name: null,
  //   age: null,
  //   address: null
  // };
  // sortName: string | null = null;
  // sortValue: string | null = null;

  // sort(sortName: string, value: string): void {
  //   this.sortName = sortName;
  //   this.sortValue = value;
  //   for (const key in this.mapOfSort) {
  //     this.mapOfSort[key] = key === sortName ? value : null;
  //   }
  //   this.search(this.listOfSearchName, this.listOfSearchAddress);
  // }

  // search(listOfSearchName: string[], listOfSearchAddress: string[]): void {
  //   this.listOfSearchName = listOfSearchName;
  //   this.listOfSearchAddress = listOfSearchAddress;
  //   const filterFunc = (item: Data) =>
  //     (this.listOfSearchAddress.length
  //       ? this.listOfSearchAddress.some(address => item.address.indexOf(address) !== -1)
  //       : true) &&
  //     (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
  //   const listOfData = this.listOfData.filter((item: Data) => filterFunc(item));
  //   if (this.sortName && this.sortValue) {
  //     this.listOfDisplayData = listOfData.sort((a, b) =>
  //       this.sortValue === 'ascend'
  //         ? a[this.sortName!] > b[this.sortName!]
  //           ? 1
  //           : -1
  //         : b[this.sortName!] > a[this.sortName!]
  //         ? 1
  //         : -1
  //     );
  //   } else {
  //     this.listOfDisplayData = listOfData;
  //   }
  // }

  // resetFilters(): void {
  //   this.listOfFilterName = [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }];
  //   this.listOfFilterAddress = [{ text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' }];
  //   this.listOfSearchName = [];
  //   this.listOfSearchAddress = [];
  //   this.search(this.listOfSearchName, this.listOfSearchAddress);
  // }

  // resetSortAndFilters(): void {
  //   this.sortName = null;
  //   this.sortValue = null;
  //   this.mapOfSort = {
  //     name: null,
  //     age: null,
  //     address: null
  //   };
  //   this.resetFilters();
  //   this.search(this.listOfSearchName, this.listOfSearchAddress);
  // }

  isVisible = false;

  showModal(id : string): void {
    this.isVisible = true;
    this.currentId = id
  }

  handleOk(_id : string): void {
    console.log(this.currentId)
    this.PropertyApiService.disapproveProperty(this.currentId).subscribe((res)=> {
      this.toast.warning("Property Disapproved!")
      this.refreshPropertList()
    }, (err : HttpErrorResponse)=>{
      console.log(err)
      this.toast.error("Something Went Wrong!")
    })
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // showConfirm(): void {
  //   this.modalService.confirm({
  //     nzTitle: 'DISAPPROVE',
  //     nzContent: 'Are you Sure? You want to disapprove this property?',
  //     nzOkText: 'YES',
  //     nzCancelText: 'NO'
  //   });
  // }
  approveProperty(_id){
    this.PropertyApiService.approveProperty(_id).subscribe((res)=> {
      this.toast.success("Property Approved!")
      this.refreshPropertList()
    }, (err : HttpErrorResponse)=>{
      console.log(err)
      this.toast.error("Something Went Wrong!")
    })
  }

}

// import { OwnerApiService } from 'src/app/services/owner/onwer-api.service';
// import { Owner } from './../models/owner/owner.model';
// import { Property } from './../models/property/property.model';
// import { PropertyApiService } from './../services/property/property-api.service';
// import { ApprovalService } from './../services/approval/approval.service';
// import { Component, OnInit } from '@angular/core';
// import { Approval } from '../models/approval/approval.model';
// import Swal from 'sweetalert2'
// @Component({
//   selector: 'app-approval',
//   templateUrl: './approval.component.html',
//   styleUrls: ['./approval.component.scss']
// })
// export class ApprovalComponent implements OnInit {

//   Approvals : Approval;
//   constructor(private ApprovalService : ApprovalService, private PropertyApiService : PropertyApiService , private OwnerApiService : OwnerApiService) { }

//   ngOnInit() {
//     this.refreshApprovalList();
//   }
  
//   AddtoProperty(approval : Approval , id : string){
//     Swal.fire({
//       title: 'Accept Approval',
//       text: "Do You want to Approve it!",
//       icon: 'info',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//       if (result.value) {
//         Swal.fire(
//           'Approved!',
//           'Request has been deleted.',
//           'success'
//         )
//         var property=new Property();
//         property.city= approval.city;
//         property.district = approval.district;
//         property.location = approval.location;
//         property.postalcode = approval.postalcode;
//         property.state = approval.state;
//         property.house= approval.housenumber;
//         this.PropertyApiService.postProperty(property).subscribe((err)=>{
//           if(!err){
//             console.log('Added');
//           }
//         })


//         var owner=new Owner();
//         owner.firstname= approval.firstname;
//         owner.lastname = approval.lastname;
//         owner.cnic = approval.cnic;
//         owner.email= approval.email;
//         this.OwnerApiService.postOwner(owner).subscribe((err)=>{
//           if(!err){
//             console.log('Added');
//           }
//         })

//         this.ApprovalService.deleteApproval(id).subscribe(
//           (msg) => console.log(msg),
//           (error) => console.log(error)
//         );

//       }
//     })
    
//   }
//   delete(id : string){
//     const swalWithBootstrapButtons = Swal.mixin({
//       customClass: {
//         confirmButton: 'btn btn-success',
//         cancelButton: 'btn btn-danger'
//       },
//       buttonsStyling: false
//     })
    
//     swalWithBootstrapButtons.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//       cancelButtonText: 'No, cancel!',
//       reverseButtons: true
//     }).then((result) => {
//       if (result.value) {
//         this.ApprovalService.deleteApproval(id).subscribe(
//           (msg) => console.log(msg),
//           (error) => console.log(error)
//         );
//         swalWithBootstrapButtons.fire(
//           'Deleted!',
//           'Approval Request has been deleted.',
//           'success'
//         )
//         location.reload();
//       } else if (
//         /* Read more about handling dismissals below */
//         result.dismiss === Swal.DismissReason.cancel
//       ) {
//         swalWithBootstrapButtons.fire(
//           'Cancelled',
//           'Approval Request is safe :)',
//           'error'
//         )
//       }
//     })
//   }
//   deleteApproval(){
    
//   }
//   refreshApprovalList(){
//       this.ApprovalService.getApprovalList().subscribe((data : Approval)=>{
//         this.Approvals = data;
//       });
//   }

// }

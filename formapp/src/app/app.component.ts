import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { $ } from 'protractor';
// import { truncate } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'formapp';
  formHeading = 'Homework 1 Angular : Form';



  // Product Variables
  qtyInput: string;
  productInput: string;
  subtotalVal: number;
  subTax: number;
  totalPrice: number;
  items: Array<any>

  // Form Variables
  firstNameInput: string;
  lastNameInput: string;
  streetAddressInput: string;

  // Variables to assign typed data
  showFirstName = '';
  showLastName = '';
  showStreetAddress = '';
  
  // Default
  formSubmitted = false;
  productValidation = false;


  constructor() {
    this.firstNameInput = '';
    this.lastNameInput = '';
    this.streetAddressInput = '';

    this.items = [];
    // this.addItems();
    this.qtyInput = '';
    this.productInput = '';
    // console.log(this);

  }

  onSubmit() {
    // Assigning input fields value to variables
    this.showFirstName = this.firstNameInput;
    this.showLastName = this.lastNameInput;
    this.showStreetAddress = this.streetAddressInput;
    
    // if all fields has value
    this.formSubmitted = true;

    // once it's submitted this will reset the fields
    if(this.firstNameInput && this.lastNameInput && this.streetAddressInput) {
        this.firstNameInput = '';
        this.lastNameInput = '';
        this.streetAddressInput = '';
        return false;
    }
  }

    // Items Selection
    products = [
        { 'name' : 'Apples', 'price' : 2.65 },
        { 'name' : 'Peaches', 'price' : 3.65 },
        { 'name' : 'Pears', 'price' : 1.45 },
        { 'name' : 'Plums', 'price' : 2.45 }
    ];


    
    // when items are added
    addItems() {
        if(!this.productInput || !this.qtyInput) {
            this.productValidation = true;
            return false;
        } else {
            this.productValidation = false;
        }

        function subTotal(price, qty) {
            return price*qty;
        }

        function subtotalTax(subAmt) {
            return (7 / 100) * subAmt;
        }

        function addTotalPrice(subtotal, tax) {
            return subtotal + tax;
        }

        // for selected product
        for(var i = 0; i < this.products.length; i++) {
            if(this.products[i] == this.products[this.productInput]) {
                // add the selected product and qty to a new array
                let newItem = {
                    'id' : i, 
                    'name' : this.products[this.productInput].name,
                    'price' : this.products[this.productInput].price,
                    'qty' : this.qtyInput,
                    'subTotal' : subTotal(this.products[this.productInput].price, this.qtyInput),
                }

                // push selected product to a new array
                this.items.push(newItem); 
            }
        }

        // if theres new product inside the new array
        // calculate subtotal, tax and total price
        if(this.items) {
            let subAmt = 0;
            // get all subtotals
            for(var i = 0; i < this.items.length; i++) {
                subAmt += this.items[i].subTotal;
            }

            // subtotal
            this.subtotalVal = subAmt;
            // get subtotals tax
            this.subTax = subtotalTax(subAmt);
            // get the total price
            this.totalPrice = addTotalPrice(subAmt, subtotalTax(subAmt));
        }

        // Once a product is added
        // this will reset the field
        if(this.productInput && this.qtyInput) {
            this.productInput = '';
            this.qtyInput = '';
            return false;
        }
        
    }

    // remove an item from selected lists
    removeItem(selectedProductId) {
        // when the user click on 'delete'
        for(var i = 0; i < this.items.length; i++) {
            // delete the selected product
            if(this.items[i].id == selectedProductId) {
                this.items.splice(i, 1);
            }
        }

        // recalculate the new total
        function subtotalTax(subAmt) {
            return (7 / 100) * subAmt;
        }

        function addTotalPrice(subtotal, tax) {
            return subtotal + tax;
        }
        
        if(this.items) {
            let subAmt = 0;

            for(var i = 0; i < this.items.length; i++) {
                subAmt += this.items[i].subTotal;
            }

            this.subtotalVal = subAmt;
            this.subTax = subtotalTax(subAmt);
            this.totalPrice = addTotalPrice(subAmt, subtotalTax(subAmt));
        }
    }
}


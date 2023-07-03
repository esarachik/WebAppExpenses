<template>
  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

    <h5>Panel General</h5>
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group me-2">
        <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
      </div>
      <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
        <span data-feather="calendar"></span>
        This week
      </button>
    </div>
  </div>

  <h6>Balance</h6>
  <div class="container mb-3">
    <div class="row">
      <div class="col-md-6 d-flex justify-content-center">
        <h6>
          Ingreso
        </h6>
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <h6>
          Egreso
        </h6>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 d-flex justify-content-center">
        <div>
          <h6>
            Pesos
          </h6>
          <h4 class="border p-3">
            $ 13.000
          </h4>
        </div>
      </div>
      <div class="col-md-3 d-flex justify-content-center">
        <div>
          <h6>
            Dolares
          </h6>
          <h4 class="border p-3">
            $ 5.000
          </h4>
        </div>
      </div>
      <div class="col-md-3 d-flex justify-content-center">
        <div>
          <h6>
            Pesos
          </h6>
          <h4 class="border p-3">
            $ 56.000
          </h4>
        </div>
      </div>
      <div class="col-md-3 d-flex justify-content-center">
        <div>
          <h6>
            Dolares
          </h6>
          <h4 class="border p-3">
            $ 90.000
          </h4>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center">  
    <button type="button" class="btn btn-sm m-3 btn-outline-primary rounded-pill">Primary</button>
    <button type="button" class="btn btn-sm m-3 btn-outline-success rounded-pill">Success</button>
    <button type="button" class="btn btn-sm m-3 btn-outline-danger rounded-pill">Danger</button>
    <button type="button" class="btn btn-sm m-3 btn-outline-warning rounded-pill">Warning</button>
    <button type="button" class="btn btn-sm m-3 btn-outline-info rounded-pill">Info</button>
    <button type="button" class="btn btn-sm m-3 btn-outline-dark rounded-pill">Dark</button>
  </div>
  
  <div class="row">
    <h6 class="col-md-2 pt-2">Movimientos</h6>
    <div class="col-md-2">
      <date-picker @change="onChangeDatePicker" v-model:value="monthYear" type="month" placeholder="Elegir Mes"></date-picker> 
    </div>
  </div>

  <table class="table table-striped">
    <thead>
      <tr>
        <th>Date</th>
        <th>Payment Method</th>
        <th>Category</th>
        <th>Description</th>
        <th>Currency</th>
        <th>Amount</th>
        <th>Is Income</th>
      <th>autoIncrementId</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in transactions" :key="item.id">
        <td>{{ item.date }}</td>
        <td>{{ item.paymentMethod }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.currency }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.isIncome }}</td>
        <td>{{ item.autoIncrementId }}</td>
      </tr>
    </tbody>
  </table>  
</template>

<script src="./Home.ts"></script>

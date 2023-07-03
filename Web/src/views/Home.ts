import {defineComponent} from 'vue'
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import 'vue-datepicker-next/locale/es.es';
// https://github.com/mengxiong10/vue-datepicker-next

import axios from 'axios'

export default  defineComponent({
  name: 'Home',
  components: {
    DatePicker
  },
  data()
  {
    return {
      transactions: [] as Transaction[],
      monthYear: new Date() as Date,
    };
  },
  created() {
    axios.get(`http://localhost:9000/api/transactions/${this.year}${this.month}`)
      .then(response => {        
        this.transactions = response.data

      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
  },
  methods: {
    onChangeDatePicker() {
      axios.get(`http://localhost:9000/api/transactions/${this.year}${this.month}`)
        .then(response => {
          this.transactions = this.mapApiResponseToInterface(response.data)

        })
        .catch(error => {
          console.error('Error al obtener datos:', error);
        });
    },
    mapApiResponseToInterface(response: any[]): Transaction[] {
      const mappedData: any[] = [];

      response.forEach((item) => {
        const transaction = {
          autoIncrementId: item.autoIncrementId,
          date: new Date(item.date),
          paymentMethod: item.paymentMethod,
          category: item.category,
          description: item.description,
          currency: item.currency,
          amount: item.amount,
          isIncome: item.isIncome,
        };

        mappedData.push(transaction);
      });

      return mappedData;
    }
  },
  computed: {
    month(): string | null {
      return (this.monthYear) ? String(this.monthYear.getMonth() + 1).padStart(2, '0') : null
    },
    year():  string | null {
      return (this.monthYear) ? this.monthYear.getFullYear().toString() : null
    },
  }
})
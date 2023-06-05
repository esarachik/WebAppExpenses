import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import 'vue-datepicker-next/locale/es.es';
// https://github.com/mengxiong10/vue-datepicker-next

import axios from 'axios'

export default {
  name: 'Home',
  components: {
    DatePicker
  },
  data() {
    return {
      transactions: [],
      monthYear: new Date(),
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
  methods:{
    onChangeDatePicker(newDate)
    {
      axios.get(`http://localhost:9000/api/transactions/${this.year}${this.month}`)
      .then(response => {
        this.transactions = response.data

      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });
    }
  },
  computed: {
    month() {
      return (this.monthYear) ? String(this.monthYear.getMonth()+1 ).padStart(2, '0'): null
    },
    year() {
      return (this.monthYear) ? this.monthYear.getFullYear() : null
    },
  }
}

import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    debugger;
    axios.get('http://localhost:9000/api/transactions')
      .then(response => {
          this.transactions = response
        
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
      });

  }
}






const app = {
    data() {
        return {
            modal: 5000000,
            target_profit_perday_inpersen: 0.5,
            total_profit_perscalping: 0,
            total_scalping_perday: 0,
            target_profit_perday_inrupiah: 300000
        }
    },
    methods: {
        calculateProfitPerScalping: function () {
            if (this.modal == null || this.total_profit_perday) {

                return;
            }
            this.total_profit_perscalping = ((this.target_profit_perday_inpersen * this.modal) / 100);
            this.calculateScalpingPerday();
        },
        calculateScalpingPerday: function () {
            var $result = parseFloat(this.target_profit_perday_inrupiah) / parseFloat(this.total_profit_perscalping);

            this.viewScalpingPerday($result);
        },
        viewScalpingPerday: function ($result) {
            this.total_scalping_perday = Math.ceil($result) + ' kali';
        }
    },
    mounted() {
        this.calculateProfitPerScalping();
        Swal.fire(
            'Nilai berikut adalah contoh jika modal scalping anda adalah Rp 5.000.000',
            '',
            'success'
          )
    },
}

Vue.createApp(app).mount('#app')
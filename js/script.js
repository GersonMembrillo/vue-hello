const { createApp } = Vue;

createApp({
	data() {
		return {
			titolo: 'TU! NON PUOI! PASSARE!',
			testocentro: 'text-center',
			image: 'img/tunonpuoipassare.gif',
			imgcentro: 'd-block my-0 mx-auto',
		};
	},
}).mount('#app');

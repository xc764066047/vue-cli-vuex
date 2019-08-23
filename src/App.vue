<template>
	<div class="app">
		<input type="text" placeholder="请输入要做的事..." class="input" @keydown.enter="addList" />
		<div class="nav">
			<router-link to="/">所有事项</router-link>
			<router-link to="/willdo">未完成</router-link>
			<router-link to="/haddone">已完成</router-link>
			
		</div>
		<router-view/>
		<div class="mission">未完成{{listLength}}项</div>
	</div>
</template>

<style scoped>
.app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

.input {
	height: 40px;
	width: 40%;
	border: 5px solid skyblue;
	font-size: 28px;
	padding-left: 4px;
}

.nav {
	width: 30%;
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	font-size: 20px;	
}

.nav a {
	color: #777;
	text-decoration: none;
}

.router-link-exact-active {
	border-bottom: 2px solid tomato;
}

.mission {
	font-size: 30px;
	font-weight: bold;
	margin-top: 30px;
}

</style>

<script>
	import store from 'vuex';
	import {mapGetters} from 'vuex';
	export default {
		methods: {
			addList(ev) {
				// 提交任务,commit相当于redux里的dispatch，第一个参数是mutations里的方法名,第二个参数是传入的payload
				this.$store.commit('addTodo', {text:ev.target.value,isChecked:false});
				ev.target.value = null;
			}
		},

		computed: mapGetters({
			listLength: 'listLength'
		})
	}
</script>



<script setup>
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import { ref } from 'vue';

const show = ref(true);
const onClick = () => {
	show.value = !show.value;
};
</script>

<template>
	<VNavigationDrawer location="end" v-model="show">
		<template v-slot:append>
			<SideBarToggler @click="onClick" :icon="show ? mdiChevronRight : mdiChevronLeft" />
		</template>
	</VNavigationDrawer>
</template>

<style scoped>
.sidebar-toggler {
	top: calc(50% - 14px);
	left: -29px;
}
</style>

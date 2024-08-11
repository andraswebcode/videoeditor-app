<script setup>
import { mdiDotsVertical } from '@mdi/js';
</script>

<template>
	<VAppBar>
		<template v-slot:prepend>
			<VBtn :icon="mdiDotsVertical" />
		</template>
		<template v-slot:append>
			<VBtn>Save</VBtn>
			<UserMenu />
		</template>
	</VAppBar>
</template>

<style scoped></style>

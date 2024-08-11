<script setup>
import { mdiFilmstrip, mdiFolderUpload, mdiFormatText, mdiImage, mdiMusic } from '@mdi/js';
import { useEditor } from '../../store';

const editor = useEditor();
</script>

<template>
	<VNavigationDrawer :width="56" permanent>
		<ToolBarList v-model="editor.activeTool">
			<ToolBarItem value="media" :icon="mdiFolderUpload" />
			<ToolBarItem value="videos" :icon="mdiFilmstrip" />
			<ToolBarItem value="images" :icon="mdiImage" />
			<ToolBarItem value="audios" :icon="mdiMusic" />
			<ToolBarItem value="text" :icon="mdiFormatText" />
		</ToolBarList>
	</VNavigationDrawer>
</template>

<style scoped></style>

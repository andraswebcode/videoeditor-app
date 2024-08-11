import { defineStore } from 'pinia';

type ActiveTool = 'media' | 'videos' | 'images' | 'audios' | 'text';

type EditorState = {
	activeTool: ActiveTool;
};

type EditorGetters = {};

export default defineStore<string, EditorState, EditorGetters>('editor', {
	state: () => ({
		activeTool: 'media'
	})
});

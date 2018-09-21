import { Seed } from './seed';
export const store = {
	state: {
		Seed
	},
	setActiveColumn(colId) {
		this.state.Seed.map(
			col => (col.id === colId ? (col.active = true) : (col.active = false))
		);
	},
	getActiveColumn() {
		return this.state.Seed.find(col => col.active === true);
	},
	addTask(taskTitle) {
		const tasks = this.getActiveColumn().tasks;
		tasks.push({ id: tasks.length + 1, title: taskTitle, edit: false });
	}
};

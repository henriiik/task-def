import * as awsnative from "@pulumi/aws-native";

const taskDef = new awsnative.ecs.TaskDefinition(
	`task-def`,
	{
		containerDefinitions: [
			1, 2, 3
		].map<awsnative.types.input.ecs.TaskDefinitionContainerDefinitionArgs>(
			(n) => ({
				name: `task_${n}`,
				image: `image_${n}`,
				memory: Math.floor(Math.random() * 10 + 1)
			})
		)
	},
	{ replaceOnChanges: ["*"] }
);

export const containerDefinitions = taskDef.containerDefinitions;

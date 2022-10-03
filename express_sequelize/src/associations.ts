import Event from "./Modules/events/entities/event.entity";
import Workshop from "./Modules/events/entities/workshop.entity";

export default async () => {
	Event.hasMany(Workshop, {
		as: "workshops",
	});

	Workshop.belongsTo(Event, {
		as: "event",
	});
};

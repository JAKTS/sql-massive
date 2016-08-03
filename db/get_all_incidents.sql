select incidents.id, incidents.us_state, injuries.name, affected_areas.name, causes.name
from incidents
join injuries on incidents.injury_id = injuries.id
join causes on incidents.cause_id = causes.id
join affected_areas on injuries.affected_area_id = affected_areas.id;

export interface Launch {
  details: string;
  id: string;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: string;
  launch_date_utc: string;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_year: string;
  links: LaunchLinks;
  mission_id: string[];
  mission_name: string;
  rocket: LaunchRocket;
  static_fire_date_unix: Date;
  static_fire_date_utc: Date;
  telemetry: LaunchTelemetry;
  tentative_max_precision: string;
  upcoming: boolean;
  ships: Ship[];
}

export interface LaunchSite {
  site_id: string;
  site_name_long: string;
  site_name: string;
}

export interface LaunchLinks {
  article_link: string;
  flickr_images: string[];
  mission_patch_small: string;
  mission_patch: string;
  presskit: string;
  reddit_campaign: string;
  reddit_launch: string;
  reddit_media: string;
  reddit_recovery: string;
  video_link: string;
  wikipedia: string;
}

export interface LaunchRocket {
  fairings: LaunchRocketFairings;
  first_stage: LaunchRocketFirstStage;
  rocket_name: string;
  rocket_interface: string;
  rocket: Rocket;
  second_stage: LaunchRocketSecondStage;
}

export interface LaunchRocketFairings {
  recovered: boolean;
  recovery_attempt: boolean;
  reused: boolean;
  ship: string;
}

export interface LaunchRocketFirstStage {
  cores: LaunchRocketFirstStageCore[];
}

export interface LaunchRocketFirstStageCore {
  block: number;
  core: Core;
  flight: number;
  gridfins: boolean;
  land_success: boolean;
  landing_intent: boolean;
  landing_interface: string;
  landing_vehicle: string;
  legs: boolean;
  reused: boolean;
}

export interface Core {
  asds_attempts: number;
  asds_landings: number;
  block: number;
  id: string;
  missions: CapsuleMission[];
  original_launch: Date;
  reuse_count: number;
  rtls_attempts: number;
  rtls_landings: number;
  status: string;
  water_landing: boolean;
}

export interface CapsuleMission {
  flight: number;
  name: string;
}

export interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  diameter: Distance;
  engines: RocketEngines;
  first_flight: Date;
  first_stage: RocketFirstStage;
  height: Distance;
  id: string;
  landing_legs: RocketLandingLegs;
  mass: Mass;
  name: string;
  payload_weights: RocketPayloadWeight[];
  second_stage: RocketSecondStage;
  stages: number;
  success_rate_pct: number;
  interface: string;
  wikipedia: string;
}

export interface Distance {
  feet: number;
  meters: number;
}

export interface RocketEngines {
  number: number;
  interface: string;
  version: string;
  layout: string;
  engine_loss_max: string;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Force;
  thrust_vacuum: Force;
  thrust_to_weight: number;
}

export interface Force {
  kN: number;
  lbf: number;
}

export interface RocketFirstStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  reusable: boolean;
  thrust_sea_level: Force;
  thrust_vacuum: Force;
}

export interface RocketLandingLegs {
  number: number;
  material: string;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface RocketPayloadWeight {
  id: string;
  kg: number;
  lb: number;
  name: string;
}

export interface RocketSecondStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  payloads: RocketSecondStagePayloads;
  thrust: Force;
}

export interface RocketSecondStagePayloads {
  option_1: string;
  composite_fairing: RocketSecondStagePayloadCompositeFairing;
}

export interface RocketSecondStagePayloadCompositeFairing {
  height: Distance;
  diameter: Distance;
}

export interface LaunchRocketSecondStage {
  block: number;
  payloads: Payload[];
}

export interface Payload {
  customers: string[];
  id: string;
  manufacturer: string;
  nationality: string;
  norad_id: number[];
  orbit_params: PayloadOrbitParams;
  orbit: string;
  payload_mass_kg: number;
  payload_mass_lbs: number;
  payload_type: string;
  reused: boolean;
}

export interface PayloadOrbitParams {
  apoapsis_km: number;
  arg_of_pericenter: number;
  eccentricity: number;
  epoch: string;
  inclination_deg: number;
  lifespan_years: number;
  longitude: number;
  mean_anomaly: number;
  mean_motion: number;
  periapsis_km: number;
  period_min: number;
  raan: number;
  reference_system: string;
  regime: string;
  semi_major_axis_km: number;
}

export interface LaunchTelemetry {
  flight_club: string;
}

export interface Ship {
  abs: number;
  active: boolean;
  attempted_landings: number;
  class: number;
  course_deg: number;
  home_port: string;
  id: string;
  image: string;
  imo: number;
  missions: ShipMission[];
  mmsi: number;
  model: string;
  name: string;
  position: ShipLocation;
  roles: string[];
  speed_kn: number;
  status: string;
  successful_landings: number;
  interface: string;
  url: string;
  weight_kg: number;
  weight_lbs: number;
  year_built: number;
}

export interface ShipMission {
  flight: string;
  name: string;
}

export interface ShipLocation {
  latitude: number;
  longitude: number;
}

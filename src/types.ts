export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  FALLEN = 'FALLEN',
  CRASHED = 'CRASHED',
  GAME_OVER = 'GAME_OVER',
}

export enum SegmentType {
  STRAIGHT = 'STRAIGHT',
  NARROW = 'NARROW',
  SLANT = 'SLANT',
  TUNNEL = 'TUNNEL',
  LEAP = 'LEAP',
}

export interface SegmentData {
  type: SegmentType;
  width: number;
  length: number;
  angle: number;
  hasHazards: boolean;
  difficulty: number;
}

export interface ConnectPoint {
  position: THREE.Vector3;
  angle: number;
}

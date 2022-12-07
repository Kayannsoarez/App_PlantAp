declare namespace Plant {
    export interface Entity {
      id: string,
      value: number,
      variable: string,
    }

    export interface PlantView {
      id: string,
      temperature: number,
      luminosity: number,
      feeling: number,
      humidity: number,
    }
}
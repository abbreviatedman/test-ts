console.log("hi");

export class Car {
  #name: string;
  #year: number;

  constructor(name: string, year: number) {
    this.#name = name;
    this.#year = year
  }

  changeCarYear(newYear: number): void {
    this.#year = newYear;
  }

  getInfo(): string[] {
    return [this.#name, this.#year.toString()]
  }
}


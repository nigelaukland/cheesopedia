export class Cheese {
    public name: string;
    public type: string;
    public description: string;
    public imagePath: string;
  
    constructor(name: string, type: string, description: string, imagePath: string) {
      this.name = name;
      this.type = type;
      this.description = description;
      this.imagePath = imagePath;
    }
  }
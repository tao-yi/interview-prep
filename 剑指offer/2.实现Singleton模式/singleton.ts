class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static GetInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const s1 = Singleton.GetInstance();
const s2 = Singleton.GetInstance();

console.log(s1 === s2);

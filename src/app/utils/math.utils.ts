

export const generateRamdomNum = (max:number) => {
    const ramdom = Math.floor(Math.random() * (max - 0));
    return ramdom;
}
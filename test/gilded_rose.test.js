const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  
  it("item normal com sellin igual a 0", function(){
    //                                   name  sellin  quality  
    const gildedRose = new Shop([new Item("test", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  })

  it("item normal com sellin maior que 0", function(){
    //                                   name  sellin  quality  
    const gildedRose = new Shop([new Item("test", 4, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  })

  it("item normal com sellin menor que 0(qualidade não pode ser menor que 0)", function(){
    //                                   name  sellin  quality  
    const gildedRose = new Shop([new Item("test", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  })

  it("Aged Brie com sellin igual a 0", function(){
    //                                   name  sellin  quality  
    const gildedRose = new Shop([new Item("Aged Brie", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  })

  it("Aged Brie com sellin maior que a 0", function(){
    //                                   name  sellin  quality  
    const gildedRose = new Shop([new Item("Aged Brie", 5, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  })

  it("Aged Brie não pode ter qualidade maior que 50", function(){
    //                                   name  sellin  quality  
    const gildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  })

  it("Backstage passes com sellin menor ou igual que 10", function(){
    //                                                          name                sellin  quality  
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(32);
  })
  

  it("Backstage passes com sellin menor ou igual que 5", function(){
    //                                                         name                sellin  quality  
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(33);
  })

  it("Backstage passes com sellin vencido", function(){
    //                                                         name                sellin  quality  
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  })

  it("Backstage passes não pode ter qualidade maior que 50", function(){
    //                                                          name                sellin  quality  
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  })

  it("item conjurado com sellin maior que 0", function(){
    //                                          name         sellin  quality  
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(28);
  })

  it("item conjurado com sellin menor que 0", function(){
    //                                          name         sellin  quality  
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(26);
  })
});

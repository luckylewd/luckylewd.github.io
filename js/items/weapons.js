Items.Weapons = {};

Items.Weapons.Dagger = new Item("dag0", "Dagger");
Items.Weapons.Dagger.price = 15;
Items.Weapons.Dagger.sDesc = function() { return "dagger"; }
Items.Weapons.Dagger.lDesc = function() { return "a simple dagger"; }
Items.Weapons.Dagger.Short = function() { return "Dagger"; }
Items.Weapons.Dagger.Long = function() { return "A simple dagger."; }
Items.Weapons.Dagger.EquipType = ItemType.Weapon;
Items.Weapons.Dagger.effect.atkMod  = 0.1;
Items.Weapons.Dagger.effect.dexterity = 1;
Items.Weapons.Dagger.effect.apPierce = 1;

Items.Weapons.ShortSword = new Item("swrd0", "S.Sword");
Items.Weapons.ShortSword.price = 50;
Items.Weapons.ShortSword.sDesc = function() { return "short sword"; }
Items.Weapons.ShortSword.lDesc = function() { return "a simple short sword"; }
Items.Weapons.ShortSword.Short = function() { return "Short sword"; }
Items.Weapons.ShortSword.Long = function() { return "A simple short sword."; }
Items.Weapons.ShortSword.EquipType = ItemType.Weapon;
Items.Weapons.ShortSword.effect.atkMod = 0.1;
Items.Weapons.ShortSword.effect.strength = 1;
Items.Weapons.ShortSword.effect.apSlash = 1;

Items.Weapons.KrawitzSword = new Item("swrd1", "K.Sword");
Items.Weapons.KrawitzSword.price = 2000;
Items.Weapons.KrawitzSword.sDesc = function() { return "fine rapier"; }
Items.Weapons.KrawitzSword.lDesc = function() { return "Krawitz' fine rapier"; }
Items.Weapons.KrawitzSword.Short = function() { return "Fine rapier"; }
Items.Weapons.KrawitzSword.Long = function() { return "Krawitz' fine rapier."; }
Items.Weapons.KrawitzSword.EquipType = ItemType.Weapon;
Items.Weapons.KrawitzSword.effect.atkMod    = 0.7;
Items.Weapons.KrawitzSword.effect.strength  = 3;
Items.Weapons.KrawitzSword.effect.dexterity = 10;
Items.Weapons.KrawitzSword.effect.apPierce  = 1;

Items.Weapons.GreatSword = new Item("swrd2", "G.Sword");
Items.Weapons.GreatSword.price = 100;
Items.Weapons.GreatSword.sDesc = function() { return "greatsword"; }
Items.Weapons.GreatSword.lDesc = function() { return "a large greatsword"; }
Items.Weapons.GreatSword.Short = function() { return "Greatsword"; }
Items.Weapons.GreatSword.Long = function() { return "A large greatsword."; }
Items.Weapons.GreatSword.EquipType = ItemType.Weapon;
Items.Weapons.GreatSword.effect.atkMod = 1;
Items.Weapons.GreatSword.effect.strength = 4;
Items.Weapons.GreatSword.effect.apSlash = 1;

Items.Weapons.Rapier = new Item("swrd3", "Rapier");
Items.Weapons.Rapier.price = 75;
Items.Weapons.Rapier.sDesc = function() { return "rapier"; }
Items.Weapons.Rapier.lDesc = function() { return "a rapier"; }
Items.Weapons.Rapier.Short = function() { return "Rapier"; }
Items.Weapons.Rapier.Long = function() { return "A sharp rapier."; }
Items.Weapons.Rapier.EquipType = ItemType.Weapon;
Items.Weapons.Rapier.effect.atkMod    = 0.1;
Items.Weapons.Rapier.effect.dexterity = 2;
Items.Weapons.Rapier.effect.apPierce  = 1;

Items.Weapons.WoodenStaff = new Item("staff0", "W.Staff");
Items.Weapons.WoodenStaff.price = 15;
Items.Weapons.WoodenStaff.sDesc = function() { return "wooden staff"; }
Items.Weapons.WoodenStaff.lDesc = function() { return "a simple wooden staff"; }
Items.Weapons.WoodenStaff.Short = function() { return "Wooden staff"; }
Items.Weapons.WoodenStaff.Long = function() { return "A simple wooden staff."; }
Items.Weapons.WoodenStaff.EquipType = ItemType.Weapon;
Items.Weapons.WoodenStaff.effect.atkMod = 0;
Items.Weapons.WoodenStaff.effect.intelligence = 1;
Items.Weapons.WoodenStaff.effect.apBlunt = 1;

Items.Weapons.LWhip = new Item("whip0", "L.Whip");
Items.Weapons.LWhip.price = 30;
Items.Weapons.LWhip.sDesc = function() { return "leather whip"; }
Items.Weapons.LWhip.lDesc = function() { return "a simple leather whip"; }
Items.Weapons.LWhip.Short = function() { return "Leather whip"; }
Items.Weapons.LWhip.Long = function() { return "A simple leather whip."; }
Items.Weapons.LWhip.EquipType = ItemType.Weapon;
Items.Weapons.LWhip.effect.atkMod  = 0;
Items.Weapons.LWhip.effect.libido  = 1;
Items.Weapons.LWhip.effect.apSlash = 1;
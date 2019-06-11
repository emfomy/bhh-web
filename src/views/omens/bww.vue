<template>
  <b-card-text class="d-flex flex-wrap justify-content-between">

      <OmenCard class="m-2" series="BWW" name="Bloodstone">
        <template slot="story">
          深綠森林沉寂的午夜裡，<br />有著深紅色脈動的石頭。<br />人們說，你無法從石頭汲取血液，<br />看來他們指的不是這一顆⋯
        </template>
        <p>每回合一次，當你進行任何檢定前，可摩擦<Omen brief name="Bloodstone" />並犧牲１級任意屬性，多擲２顆骰（至多８顆）。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BWW" name="Box">
        <template slot="story">
          人們老是告訴你要跳脫框架思考，<br />但你現在該擔心的是會死在裡面⋯
        </template>
        <p>當抽到<Omen brief name="Box" />時，再抽取１張道具卡放在此卡上面。</p>
        <p><Omen brief name="Box" />內的物品不可被棄置或搶奪。當有人要搶奪這個道具，你可以棄掉<Omen brief name="Box" />以避免該物品被奪走。</p>
        <p>在你的回合中，你可將<Omen brief name="Box" />內的物品棄掉，並將另一個你持有的物品放進<Omen brief name="Box" />。若<Omen brief name="Box" />是空的，你可以直接將一個你持有的物品放進<Omen brief name="Box" />。</p>
        <p><Omen brief name="Box" />不可被搶奪。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BWW" name="Cat" usage="companion">
        <template slot="story">
          一般認為被貓穿越正要行徑的路線<br />是不幸的預兆，不過換個角度想，<br />也許是你穿越牠正要行徑的路線，<br />而牠似乎因此有點不滿。<br />不過現在牠正陪伴著你。
        </template>
        <Roll0>當你進行任何檢定前，你可以把<Omen brief name="Cat" />叫出來碰碰運氣。擲１顆骰子：</Roll0>
        <RollL>
          <RollT>1+</RollT>
            <RollD>擲骰結果加２。</RollD>
          <RollT>0</RollT>
            <RollD>擲骰結果減２。</RollD>
        </RollL>
        <p><Omen brief name="Cat" />不可被棄置、交易、或搶奪。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BWW" name="Key">
        <template slot="story">
          你曾經好奇的想著，要怎麼<br />將這屋子裡所有的門鎖都打開？<br />但問題是，它們為什麼<br />在一開始就被鎖上了呢？
        </template>
        <p>當你要從卡牌或是房間效果上檢定以打開或拿取東西時，可以使用鑰匙並多擲４顆骰（至多８顆）。（像是<Room name="Locked Room" />、<Token no-shape name="Safe" />、<Room name="Vault" />）</p>
        <p>你可以直接進出有<Token name="Lock" />的房間。</p>
        <p>在你的回合開始時，若你在一扇未上鎖的門旁邊，你可以將１枚<Token name="Lock" />放在該門上。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BWW" name="Letter">
        <template slot="story">
          充滿潦草墨跡的鬼畫符。
        </template>
        <p>你可以將一個你的探險者標記交給另一名探險者。</p>
        <p>此後，在你的回合中，你可以移動到該名探險者所在的房間裡，並將<Omen brief name="Letter" />棄掉，該探險者亦將你的探險者標記棄掉。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BWW" name="Photograph">
        <template slot="story">
          當你看著這張照片時，它的景象漸漸變成這棟屋子裡的另一間房間。<br />大概還是這棟屋子吧⋯
        </template>
        <p>當你探索新房間時，你可以將第一張抽到的房間板塊棄掉，重新抽取新的（合乎探索規則的）房間板塊，並進行探索。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BWW" name="Rope">
        <template slot="story">
          今天應該沒有用來吊死誰⋯吧？
        </template>
        <p>你可以從直接爬上<Room name="Coal Chute" />，亦可從<Room name="Ballroom" />爬到<Room name="Gallery" />。</p>
        <p>當你經過<Room name="Chasm" />時，無需進行檢定</p>
        <p>你不會因<Room name="Collapsed Room" />的效果受傷，並可從它下方的房間爬上來。</p>
        <p>當你使用升降機時，可以移動到任何的<Room name="Landing" />。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BWW" name="Vial">
        <template slot="story">
          一位老瘋婆說，你該喝下那瓶閃爍著琥珀色光芒的藥水。也許這就是她會變成這副德性的原因⋯
        </template>
        <Roll0>此後每回合一次，你可擲３顆骰嘗試喝下琥珀色藥水：</Roll0>
        <RollL>
          <RollT>4</RollT>
            <RollD>這不曉得是什麼血。獲得１級力量、１級速度、１級知識，但失去２級神志。</RollD>
          <RollT>3</RollT>
            <RollD>你感到興奮。獲得１級物理屬性。</RollD>
          <RollT>2</RollT>
            <RollD>實驗失敗，沒有效果。</RollD>
          <RollT>1</RollT>
            <RollD>你做了個預知夢。受到２點精神傷害，並抽取１張道具卡。</RollD>
          <RollT>0</RollT>
            <RollD>這有毒！受到２點物理傷害。</RollD>
        </RollL>
      </OmenCard>

  </b-card-text>
</template>

<script>
import OmenCard from '@/components/bhh/card/omen.vue';

export default {
  name: 'OmensBWW',
  components: {
    OmenCard,
  },
};
</script>

<template>
  <b-card-text class="d-flex flex-wrap justify-content-between">

    <ItemCard class="m-2" series="BWW" name="Blueprint">
      <template slot="story">
        這間在屋子的老舊地圖。
      </template>
      <p>當你執行移動相關的檢定時，例如進入、離開、或穿越房間時，你可以選擇檢定的結果。</p>
      <p>你可以在有升降機圖示的房間之間傳送移動。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Boomstick" usage="weapon">
      <template slot="story">
        有點生鏽的槍身，<br />看得出來有被好好的使用過，<br />不過仍留下了兩發不錯的子彈。
      </template>
      <p>當你抽到此卡時，放置２枚<Token name="Item" />在這張卡上。</p>
      <p>你可以犧牲１枚<Token name="Item" />，並使用<Item brief name="Boomstick" />進行速度７攻擊，防禦方亦用速度進行防禦，並受到物理傷害。</p>
      <p>使用<Item brief name="Boomstick" />，你可對任何視線內（透過任何未受阻礙的門可看到）的對手進行攻擊，若攻擊失敗，你不會被反擊。</p>
      <p>當你用盡所有<Token name="Item" />時，棄掉<Item brief name="Boomstick" />。</p>
      <p><Item brief name="Boomstick" />不得用於防禦。</p>
      <p>你不可同時使用多樣武器攻擊。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Camcorder">
      <template slot="story">
        看起來像是以前探險者所留下的，<br />帶子裡還有一些影像，<br />你應該好好把它看完。
      </template>
      <p>當你抽到此卡時，將與探險者人數等量的<Token name="Knowledge Roll" />放置在這張卡上。</p>
      <p>當你持有<Item brief name="Camcorder" />時，你可以拿取一枚<Token name="Knowledge Roll" />，並提升１級知識。</p>
      <p>你無法拿取超過一枚的<Token name="Knowledge Roll" />。</p>
      <p>當所有<Token name="Knowledge Roll" />都被拿完時，棄掉<Item brief name="Camcorder" />。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Ceremonial Robe">
      <template slot="story">
        看不出來是祭司還是祭品的服裝。
      </template>
      <p>每回合一次，當你進行神志或知識檢定時，你可重擲任意數量的骰子。你必須使用重擲後的結果。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Chainsaw" usage="weapon">
      <template slot="story">
        咈咈、寶貝、咈咈。
      </template>
      <p>當你使用<Item brief name="Chainsaw" />進行力量攻擊或防禦時，多擲１顆骰。</p>
      <p>你不可同時使用多樣武器攻擊。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Chalk">
      <template slot="story">
        由骨灰和鐵塊製作的簡單畫筆。
      </template>
      <p>你可以使用知識取代力量進行防禦。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Device">
      <template slot="story">
        由雜亂線圈與玻璃儀器所組成，<br />用來測量這世上未知的東西。
      </template>
      <p>當你回合結束時，有任何對手與你處在同一房間之中，你提升１級知識。</p>
      <p>當你攻擊時，可棄掉此卡，多擲３顆骰，但此次攻擊只能用於偷取物品。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Effigy">
      <template slot="story">
        精緻手工的公仔娃娃，<br />穿著與你一樣的服裝。
      </template>
      <p>當你持有<Item brief name="Effigy" />時，所有檢定（不含攻擊與防禦）皆多擲１顆骰。</p>
      <p>若你失去<Item brief name="Effigy" />，全屬性各失去１顆骰的等級。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Locket">
      <template slot="story">
        細細金鍊紀念著愛的回憶。
      </template>
      <p>立即獲得１級神志。</p>
      <p>若你失去<Item brief name="Locket" />，立即失去１級神志。</p>
      <p>當你受到精神傷害時，減少１點傷害。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Snake Oil">
      <template slot="story">
        破損的標籤上，<br />模糊地註記著提升活力的效用。<br />聞起來不像有毒的樣子。
      </template>
      <p>可自行使用，或用於治療同房的探險者。</p>
      <p>被<Item brief name="Smelling Salts" />治療的探險者，將一項物理屬性和／或一項精神屬性恢復至初始值。</p>
      <p>使用後將<Item brief name="Snake Oil" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BWW" name="Teapot">
      <template slot="story">
        陶瓷的精巧茶壺，<br />鑲嵌著粉紅色花紋的裝飾，<br />顯露出高貴的質感。
      </template>
      <p>每回合一次，任何一位同房的探險者（包括你）受到物理傷害時，你可以抽取１張道具卡。</p>
      <p>若你身為／成為叛徒，將此卡放回道具牌堆洗勻。</p>
    </ItemCard>

  </b-card-text>
</template>

<script>
import ItemCard from '@/components/bhh/card/item.vue';

export default {
  name: 'ItemsBWW',
  components: {
    ItemCard,
  },
};
</script>

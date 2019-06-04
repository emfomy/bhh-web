<template>
  <b-card-text class="d-flex flex-wrap justify-content-between">

    <ItemCard class="m-2" series="BHH" name="Adrenaline Shot">
      <template slot="story">
        一管含奇怪螢光液體的針筒。
      </template>
      <p>每當你進行任何檢定前，可注入此劑，使你擲出的結果額外增加４點。</p>
      <p>使用後將<Item brief name="Adrenaline Shot" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Amulet Of The Ages">
      <template slot="story">
        鑲嵌著寶石的古代銀器，上頭銘刻著祝福。
      </template>
      <p>立即獲得１級全屬性。</p>
      <p>若你失去<Item brief name="Amulet Of The Ages" />，立即失去３級全屬性。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Angel Feather">
      <template slot="story">
        你手中飄動著一根完美的羽毛。
      </template>
      <p>當你在進行任何擲骰前，可以使用<Item brief name="Angel Feather" />並指定一個 0-8 的數字，視為擲骰結果。</p>
      <p>使用後將<Item brief name="Angel Feather" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Armor">
      <template slot="story">
        雖然只是文藝復興博覽會的道具，但仍然是金屬製。
      </template>
      <p>每當你受到任何物理傷害時，由於<Item brief name="Armor" />的保護，減少１點物理傷害。</p>
      <p><Item brief name="Armor" />不會被搶奪。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Axe" usage="weapon">
      <template slot="story">
        非常尖銳。
      </template>
      <p>當你使用<Item brief name="Axe" />進行力量攻擊時，額外多擲１顆骰。</p>
      <p><Item brief name="Axe" />不得用於防禦。</p>
      <p>你不可同時使用多樣武器攻擊。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Bell">
      <template slot="story">
        能發出宏亮聲響的黃銅鈴鐺？
      </template>
      <p>立即獲得１級神志。</p>
      <p>若你失去<Item brief name="Bell" />，立即失去１級神志。</p>
      <Roll0>在作祟發生後，每回合一次，你可進行神志檢定嘗試搖響<Item brief name="Bell" />：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>你可將任意數量且未受阻礙的英雄向你拉進１格。</RollD>
        <RollT>0-4</RollT>
          <RollD>叛徒可遣任意數量的怪物向你移動１格。若你身為叛徒，則忽略此效果。若沒有叛徒，則所有怪物皆須向你前進１格。</RollD>
      </RollL>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Blood Dagger" usage="weapon">
      <template slot="story">
        一把齷齪的武器，針管自劍柄延伸出，深深地插入你的靜脈中⋯
      </template>
      <p>當你使用<Item brief name="Blood Dagger" />進行力量攻擊時，額外多擲３顆骰（至多８顆），並失去１級速度。</p>
      <p><Item brief name="Axe" />不得用於防禦。</p>
      <p>你不可同時使用多樣武器攻擊。</p>
      <p><Item brief name="Blood Dagger" />不可被棄置、交易。</p>
      <p>若<Item brief name="Blood Dagger" />被搶奪，受到２顆骰的物理傷害。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Bottle">
      <template slot="story">
        不透明的藥罐，流動著黑色的液體。
      </template>
      <Roll0>在作祟發生後，每回合一次，你可擲３顆骰嘗試喝下黑色液體：</Roll0>
      <RollL>
        <RollT>6</RollT>
          <RollD>移至任一間房間。</RollD>
        <RollT>5</RollT>
          <RollD>獲得２級力量和２級速度。</RollD>
        <RollT>4</RollT>
          <RollD>獲得２級神志和２級知識。</RollD>
        <RollT>3</RollT>
          <RollD>獲得１級知識，並失去１級力量。</RollD>
        <RollT>2</RollT>
          <RollD>失去２級神志和２級知識。</RollD>
        <RollT>1</RollT>
          <RollD>失去２級力量和２級速度。</RollD>
        <RollT>0</RollT>
          <RollD>失去２級全屬性。</RollD>
      </RollL>
      <p>使用後將<Item brief name="Bottle" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Candle">
      <template slot="story">
        它能夠驅散陰影⋯至少你希望它真能如此⋯
      </template>
      <p>當你因事件而進行檢定時，多擲１顆骰（至多８顆）。</p>
      <p>若你同時持有<Item name="Bell" />、<Omen name="Book" />、<Item name="Candle" />時，立即獲得２級全屬性。但若你失去任何一樣，立即失去２級全屬性。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Dark Dice">
      <template slot="story">
        你認為你夠幸運嗎？
      </template>
      <Roll0>每回合一次，你可擲３顆骰嘗試使用<Item brief name="Dark Dice" />：</Roll0>
      <RollL>
        <RollT>6</RollT>
          <RollD>移至任一英雄所在的房間。</RollD>
        <RollT>5</RollT>
          <RollD>將你與所有同房的探險者，移至任一相鄰的房間。</RollD>
        <RollT>4</RollT>
          <RollD>獲得１級物理屬性。</RollD>
        <RollT>3</RollT>
          <RollD>移至任一相鄰的房間。</RollD>
        <RollT>2</RollT>
          <RollD>獲得１級精神屬性。</RollD>
        <RollT>1</RollT>
          <RollD>抽取１張事件卡。</RollD>
        <RollT>0</RollT>
          <RollD>將所有屬性降至最低數值，並丟棄此卡。</RollD>
      </RollL>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Dynamite">
      <template slot="story">
        引信尚未點燃⋯
      </template>
      <Roll0>在你的一次攻擊中，你可以使用<Item brief name="Dynamite" />取代攻擊，將<Item brief name="Dynamite" />點然並扔進一間相鄰的房間。該房間的所有探險者與怪物，皆需進行速度檢定：</Roll0>
      <RollL>
        <RollT>5+</RollT>
          <RollD>你躲開了炸藥的攻擊。</RollD>
        <RollT>0-4</RollT>
          <RollD>受到４點物理傷害。</RollD>
      </RollL>
      <p>使用後將<Item brief name="Dynamite" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Healing Salve">
      <template slot="story">
        淺碗中裝著粘稠的糊狀物。
      </template>
      <p>可自行使用，或用於治療同房的探險者。</p>
      <p>被<Item brief name="Healing Salve" />治療的探險者，將力量和速度恢復至初始值。</p>
      <p>使用後將<Item brief name="Healing Salve" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Idol">
      <template slot="story">
        祂選擇你或許是為了某些目地⋯像是活體獻祭⋯
      </template>
      <p>每回合一次，當你因進行檢定、戰鬥、或事件擲骰前，可摩擦神像並犧牲１級神志，額外多擲２顆骰（至多８顆）。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Lucky Stone">
      <template slot="story">
        光滑、看似平凡無奇的石頭，你感覺到它似乎可以為你帶來好運。
      </template>
      <p>在你的任何擲骰後，可摩擦<Item brief name="Lucky Stone" />，並重擲任意數量的骰子。</p>
      <p>使用後將<Item brief name="Lucky Stone" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Medical Kit">
      <template slot="story">
        一位醫生的急救包，某些重要資源已被用盡。
      </template>
      <Roll0>每回合一次，你可進行知識檢定嘗試使用<Item brief name="Medical Kit" />治療自己或同房的探險者：</Roll0>
      <RollL>
        <RollT>8+</RollT>
          <RollD>恢復３級物理屬性。</RollD>
        <RollT>6-7</RollT>
          <RollD>恢復２級物理屬性。</RollD>
        <RollT>4-5</RollT>
          <RollD>恢復１級物理屬性。</RollD>
        <RollT>0-3</RollT>
          <RollD>你無法理解<Item brief name="Medical Kit" />該如何使用。</RollD>
      </RollL>
      <p><Item brief name="Medical Kit" />無法將屬性提升超過初始值。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Music Box">
      <template slot="story">
        手製的舊式音樂盒，在你腦海中繚繞一陣幽森的旋律。
      </template>
      <p>每回合一次，你可開啟或關閉<Item brief name="Music Box" />。</p>
      <p>當<Item brief name="Music Box" />被開啟後，房內所有的探險者皆須進行神智檢定達 4+，若失敗，則被旋律催眠，並立即結束回合。</p>
      <p>當持有<Item brief name="Music Box" />被催眠時，<Item brief name="Music Box" />掉落至地面，並保持開啟狀態。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Pickpocket’s Glove">
      <template slot="story">
        幫助自己從未如此輕鬆。
      </template>
      <p>當你與其他探險者處於同一房間時，你可以使用<Item brief name="Pickpocket’s Glove" />，任意偷取該探險者所持有的其中一項道具。</p>
      <p>使用後將<Item brief name="Pickpocket’s Glove" />丟棄。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Puzzle Box">
      <template slot="story">
        應該有辦法打開吧？
      </template>
      <Roll0>每回合一次，你可進行知識檢定嘗試打開<Item brief name="Puzzle Box" />：</Roll0>
      <RollL>
        <RollT>6+</RollT>
          <RollD>你順利地打開<Item brief name="Puzzle Box" />。抽取２張道具卡，並丟棄此卡。</RollD>
        <RollT>0-5</RollT>
          <RollD>你無法理解<Item brief name="Puzzle Box" />的奧妙。</RollD>
      </RollL>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Rabbit’s Foot">
      <template slot="story">
        帶來幸運的左後腳，但那隻兔子就不怎麼幸運了⋯
      </template>
      <p>每回合一次，你可重擲一顆骰子。你必須使用重擲後的結果。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Revolver" usage="weapon">
      <template slot="story">
        外型老舊，但看似極具殺傷力的武器。
      </template>
      <p>你可以使用<Item brief name="Revolver" />進行速度攻擊，防禦方使用速度進行防禦，並受到物理傷害。</p>
      <p>當你使用<Item brief name="Revolver" />進行速度攻擊，額外多擲１顆骰（至多８顆）。</p>
      <p>使用<Item brief name="Revolver" />，你可對任何視線內（透過任何未受阻礙的門可看到）的對手進行攻擊，若攻擊失敗，你不會被反擊。</p>
      <p><Item brief name="Revolver" />不得用於防禦。</p>
      <p>你不可同時使用多樣武器攻擊。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Sacrificial Dagger" usage="weapon">
      <template slot="story">
        彎曲的鐵製短劍，有著神秘的符號與斑斑的血跡。
      </template>
      <Roll0>當你使用<Item brief name="Sacrificial Dagger" />進行力量攻擊時，額外多擲２顆骰（至多８顆），但請先進行知識檢定判定副作用：</Roll0>
      <RollL>
        <RollT>6+</RollT>
          <RollD>沒有副作用。</RollD>
        <RollT>3-5</RollT>
          <RollD>受到１顆骰的精神傷害。</RollD>
        <RollT>0-2</RollT>
          <RollD>這把匕首倒插入你的手中！受到２顆骰的物理傷害，並且攻擊失敗，且本回合再也無法進行攻擊。</RollD>
      </RollL>
      <p><Item brief name="Sacrificial Dagger" />不得用於防禦。</p>
      <p>你不可同時使用多樣武器攻擊。</p>
    </ItemCard>

    <ItemCard class="m-2" series="BHH" name="Smelling Salts">
      <template slot="story">
        深深吸了一口⋯
      </template>
      <p>可自行使用，或用於治療同房的探險者。</p>
      <p>被<Item brief name="Smelling Salts" />治療的探險者，將知識至初始值。</p>
      <p>使用後將<Item brief name="Smelling Salts" />丟棄。</p>
    </ItemCard>

  </b-card-text>
</template>

<script>
import ItemCard from '@/components/bhh/card/item.vue';

export default {
  name: 'ItemsBHH',
  components: {
    ItemCard,
  },
};
</script>

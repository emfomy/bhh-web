<template>
  <b-card-text class="d-flex flex-wrap justify-content-between">

      <OmenCard class="m-2" series="BHH" name="Bite">
        <template slot="story">
          一聲咆哮，瀰漫著死亡的氣息，接續著痛苦、黑暗，然後消失⋯
        </template>
        <p>當你抽到此卡時，某種東西突然咬上了你！</p>
        <p>你的右方的玩家代替神秘生物，擲４顆骰子對你的攻擊，你以力量進行防禦。</p>
        <p>攻擊後，神秘生物又再一次隱沒在黑暗當中。</p>
        <p><Omen brief name="Bite" />不可被棄置、交易、或搶奪。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Book">
        <template slot="story">
          這是一本日記？實驗筆記？遠古手稿？還是一本妄語呢？
        </template>
        <p>立即獲得２級知識。</p>
        <p>若你失去<Omen brief name="Book" />，立即失去２級知識。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Crystal Ball">
        <template slot="story">
          在球體中浮現了模糊的影像。
        </template>
        <Roll0>在作祟發生後，每回合一次，你可進行知識檢定嘗試窺視<Omen brief name="Crystal Ball" />：</Roll0>
        <RollL>
          <RollT>4+</RollT>
            <RollD>你看見真相。從道具牌堆中選擇一張卡，將牌堆洗勻後將選擇的卡放在牌堆頂端。</RollD>
          <RollT>1-3</RollT>
            <RollD>你不自覺的地避開了視線。失去１級神志。</RollD>
          <RollT>4+</RollT>
            <RollD>你直視了地獄景象。失去２級神志。</RollD>
        </RollL>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Dog" usage="companion">
        <template slot="story">
          看似友善的癩皮狗⋯至少你希望牠是⋯
        </template>
        <p>立即獲得１級力量和１級神志。</p>
        <p>若你失去<Omen brief name="Dog" />，立即失去１級力量和１級神志。</p>
        <!-- <p>使用一個小怪物標示代表這隻<Omen brief name="Dog" />，將牠放在你的房間裡。（不要和其他怪物搞混。）</p> -->
        <p>每回合一次，你可差遣<Omen brief name="Dog" />來回於六格內的房間（可以使用門和樓梯），途中牠可以攜帶一件物品去丟下，同時也可以撿拾並帶回一件掉落的物品。</p>
        <p><Omen brief name="Dog" />不會被對手阻擋。牠不能通過單向的通道、或任何需要擲骰的房間。牠也不能攜帶會減緩移動速度的物品。</p>
        <p><Omen brief name="Dog" />不可被棄置、交易、或搶奪。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Girl" usage="companion">
        <template slot="story">
          被困住的孤獨女孩，你拯救了她！
        </template>
        <p>立即獲得１級神志和１級知識。</p>
        <p>若你失去<Omen brief name="Girl" />，立即失去１級神志和１級知識。</p>
        <p><Omen brief name="Girl" />不可被棄置、交易、或搶奪。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Holy Symbol">
        <template slot="story">
          混沌世界中的和平象徵。
        </template>
        <p>立即獲得２級神志。</p>
        <p>若你失去<Omen brief name="Holy Symbol" />，立即失去２級神志。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Madman" usage="companion">
        <template slot="story">
          口吐白沫、胡言亂語的瘋漢。
        </template>
        <p>立即獲得２級力量，並失去１級神志。</p>
        <p>若你失去<Omen brief name="Girl" />，立即失去２級力量，並獲得１級神志。</p>
        <p><Omen brief name="Girl" />不可被棄置、交易、或搶奪。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Mask">
        <template slot="story">
          一個可以用來隱藏你意圖的陰沈面具。
        </template>
        <Roll0>此後每回合一次，你可進行神志檢定嘗試使用<Omen brief name="Mask" />：</Roll0>
        <RollL>
          <RollT>4+</RollT>
            <RollD>你可自由戴上或脫下<Omen brief name="Mask" />。</RollD>
          <RollT>0-3</RollT>
            <RollD>你本回合無法使用<Omen brief name="Mask" /></RollD>
        </RollL>
        <p>戴上面具後，立即獲得２級神志，並失去２級知識。</p>
        <p>脫下面具後，立即失去２級神志，並獲得２級知識。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Medallion">
        <template slot="story">
          一個刻有五芒星標誌的徽章。
        </template>
        <p>你將不再受到<Room name="Pentagram Chamber" />、<Room name="Crypt" />、<Room name="Graveyard" />的影響。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Ring">
        <template slot="story">
          一個磨損的戒指，上頭有著難以理解的刻記。
        </template>
        <p>當你遇攻擊的對手有神志屬性時，你可以使用<Omen brief name="Ring" />進行神志攻擊，嘗試造成精神傷害，對手亦須以神志進行防禦。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Skull">
        <template slot="story">
          一個破碎且缺牙的骷髏頭。
        </template>
        當你受到精神傷害時，可將所有的傷害轉為物理傷害，但不可只轉換部分傷害。
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Spear" usage="weapon">
        <template slot="story">
          一個充滿能量而震動的武器。
        </template>
        <p>當你使用<Omen brief name="Spear" />進行力量攻擊時，額外多擲２顆骰。</p>
        <p><Omen brief name="Spear" />不得用於防禦。</p>
        <p>你不可同時使用多樣武器攻擊。</p>
      </OmenCard>

      <OmenCard class="m-2" series="BHH" name="Spirit Board">
        <template slot="story">
          刻印著招喚死亡的文字與數字。
        </template>
        <p>此後每回合移動之前，你可以使用<Omen brief name="Spirit Board" />窺視房間牌堆頂端的板塊。</p>
        <p>在作祟發生之後，每當你使用<Omen brief name="Spirit Board" />時，叛徒可遣任意數量的怪物向你移動１格。若你身為叛徒，則忽略此效果。若沒有叛徒，則所有怪物皆須向你前進１格。</p>
      </OmenCard>

  </b-card-text>
</template>

<script>
import OmenCard from '@/components/bhh/card/omen.vue';

export default {
  name: 'OmensBHH',
  components: {
    OmenCard,
  },
};
</script>

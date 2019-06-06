<template>
  <Haunt>
    <template slot="zh-title">木乃伊橫行</template>
    <template slot="en-title">The Mummy Walks</template>

    <template slot="hero">
      <section class="font-story">
        <p>房內塵土飛揚，你心中閃過不祥的陰霾。你聽見你其中一個朋友放聲大叫，聲音中充滿了欣喜與恐懼。一段冰冷、消沉的聲音在你心中顫抖。</p>
        <p>「我失去我的妻子遠超過你所能理解之時日。縱使淚已成灰，愛仍熾熱如日。今我愛人已為我重生。你必不能使我等分離⋯若你膽敢阻擾，我必將你靈魂生吞活剝。」</p>
      </section>
      <hr />
      <section>
        <h4>此刻</h4>
        <ul>
          <li class="mb-1">將兩枚<Token name="Knowledge Roll" />放到一旁備用。</li>
          <li class="mb-1">叛徒失去<Omen name="Girl" />預兆卡以及從她獲得的所有效果。取而代之，他將一枚<Monster small name="magenta" />（代表<Omen name="Girl" />），擺放到任何與作祟揭露房間同樓層，並且距離<Monster name="Mummy" />五格以上的房間。如果沒有距離五格以上的房間，則擺放到盡量越遠越好。</li>
          <li class="mb-1">當有玩家進到和<Omen name="Girl" />同一房間時，該玩家自動持有<Omen name="Girl" />預兆卡。</li>
        </ul>
      </section>
    </template>

    <template slot="traitor">
    </template>
  </Haunt>
</template>

<script>
import Haunt from '@/components/bhh/haunt/haunt.vue';

export default {
  components: {
    Haunt,
  },
};
</script>

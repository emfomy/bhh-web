<template>
  <b-container class="width-A4 py-3">

    <header class="text-center">
      <h1>道具列表</h1>
      <p></p>
    </header>

    <b-card class="mb-3" body-class="d-flex flex-wrap justify-content-between">

      <ItemCard class="m-2" name="Adrenaline Shot">
        <template slot="story">
          一管含奇怪螢光液體的針筒。
        </template>
        <p>每當你進行任何檢定前，可注入此劑，使你擲出的結果額外增加４點。</p>
        <p>使用後將針筒丟棄。</p>
      </ItemCard>

      <ItemCard class="m-2" name="Amulet Of The Ages">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Angel Feather">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Armor">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Axe">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Bell">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Blood Dagger">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Bottle">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Candle">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Dark Dice">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Dynamite">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Healing Salve">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Idol">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Lucky Stone">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Medical Kit">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Music Box">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Pickpocket’s Glove">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Puzzle Box">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Rabbit’s Foot">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Revolver">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Sacrificial Dagger">
        <template slot="story">
        </template>
      </ItemCard>

      <ItemCard class="m-2" name="Smelling Salts">
        <template slot="story">
        </template>
      </ItemCard>

    </b-card>

  </b-container>
</template>

<script>
import ItemCard from '@/components/bhh/card/item.vue';

export default {
  name: 'Events',
  components: {
    ItemCard,
  },
  methods: {
    download() {
      console.log(this.$children);
    },
  },
};
</script>

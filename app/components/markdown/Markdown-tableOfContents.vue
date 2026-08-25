<script setup lang="ts">
import {parseMarkdown} from 'comark'
import toc from 'comark/plugins/toc'
import {ref} from "vue";

const props = defineProps({
  rawContent: {
    type: String,
    required: true
  }
})
const tocData = ref()

console.log(props.rawContent)
async function tocRefresh(rawContent: string) {
  try {
    const result = await parseMarkdown(rawContent, {
      plugins: [toc()]
    })

    tocData.value = result.meta.toc
  }
  catch (error) {
    console.error(error)
  }
}
await tocRefresh(props.rawContent)
</script>

<template>
  <div class="markdown-toc">
    <div class="markdown-toc-menu">
      <Button @click="tocRefresh(props.rawContent)">Refresh</Button>
    </div>
    <div class="toc-layout">
      <aside>
        <h2>{{ tocData.title || 'On This Page' }}</h2>
        <nav>
          <ul>
            <li v-for="link in tocData.links" :key="link.id">
              <a :href="`#${link.id}`">{{ link.text }}</a>
              <ul v-if="link.children">
                <li v-for="child in link.children" :key="child.id">
                  <a :href="`#${child.id}`">{{ child.text }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.markdown-toc {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  overflow-y: auto;
  width: 100%;
  scroll-behavior: smooth;
}
.toc-layout {
  display: flex;
  overflow-y: auto;

  a,
  a:visited,
  a:hover,
  a:active,
  a.router-link-active {
    color: black;
    text-decoration: none;
  }
}
</style>
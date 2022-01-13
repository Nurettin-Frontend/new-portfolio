<template>
  <div>
    <Header />
    <Cards />
    <Skills />
    <Works />
    <Contact />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Cards from '../components/Cards.vue'
import Skills from '../components/Skills.vue'
import Works from '../components/Works.vue'
import Contact from '../components/Contact.vue'
export default {
  components:{
    Header,
    Cards,
    Skills,
    Works,
    Contact
  }
}
</script>
<template>
  <div class="home">
    <v1 />
    <v2 />
  </div>
</template>

<script>
// @ is an alias to /src
import V1 from '@/components/V1';
import V2 from '@/components/V2';
export default {
  name: 'Home',
  components: {
    V1,
    V2,
  }
}
</script>

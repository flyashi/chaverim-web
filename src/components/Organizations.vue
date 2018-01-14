<template>
  <div class="org-wrapper">
    <div class="org-header">
      <p>
        Each Chaverim/Chaveirim organization is independent. Though we do cooperate, you must contact the organization nearest you for assistance.
      </p>
      <p>
        Locate the organization nearest you by searching for your location below.
      </p>
      <div class="search-wrapper">
        <el-autocomplete
          v-model="searchState"
          placeholder="Where are you?"
          :fetch-suggestions="fetchSuggestions"
          class="inline-input"
          @select="autocompleteSelected"
          >
                            <i slot="suffix" class="el-icon-error" />

        </el-autocomplete>

      </div>
    </div>
    <div class="orgsbody">
      <el-card v-for="org in filteredOrgs" :key="org.id" style="margin-top: 10px">
        <!--
          {
  "id": "5T",
  "short_name": "5 Towns & Far Rockaway",
  "full_name": "Chaverim of the Five Towns and Far Rockaway",
  "dispatch_hotline": "+17183371800",
  "info_hotline": "+15165555555",
  "website": "http://www.chaverim5t.org",
  "coverage_areas": [
    "Far Rockaway",
    "Bayswater",
    "Lawrence",
    "Cedarhurst",
    "Woodmere",
    "North Woodmere",
    "Oceanside",
    "Belle Harbor",
    "Five Towns",
    "5 Towns",
    "Great Neck"
  ]
}
          -->
        <!-- <div slot="header" class="clearfix">
          {{org.short_name}}
        </div> -->
        <!-- <div class="text item"> -->
          <div @click="1==1">
            {{org.full_name}}
        <el-button type="text" @click="orgIndex=org.id; showDialog=true" style="float: right; padding: 3px;">More Info</el-button>
        
          </div>
        
        <!-- </div> -->
      </el-card>
      <div v-show="filteredOrgs.length === 0" style="text-align: center">
        Sorry, no results.
      </div>
      <!-- can't use v-show here; orgs[orgIndex].full_name is undefined if orgIndex is undefined -->
      <el-dialog v-if="showDialog"
          :title="orgs[orgIndex].full_name"
          :visible.sync="showDialog">
          <p>Hotline: {{orgs[orgIndex].dispatch_hotline}}</p>
          <p>Info: {{orgs[orgIndex].info_hotline}}</p>
          <p>Description: {{orgs[orgIndex].description}}</p>
          <p>Website: {{orgs[orgIndex].website}}</p>
          <p>Coverage areas: {{orgs[orgIndex].coverage_areas.join(', ')}}</p>
        </el-dialog>
    </div>
  </div>
</template>

<script>

import orgs from '@/config/orgs'

export default {
  name: 'Organizations',
  data() {
    return {
      searchState: '',
      allRegions: [],
      showDialog: false,
      orgIndex: 0,
      orgs,
    }
  },
  computed: {
    filteredOrgs: function() {
      if (this.searchState === '') {
        return Object.values(orgs).filter(org => org.test_only !== true).sort(compareOrgs)
      }
      return Object.values(orgs).filter(org => org.test_only !== true).filter((org) => {
        let filterTextLower = this.searchState.toLowerCase()
        if (org.id.toLowerCase() === filterTextLower) return true
        if (org.short_name.toLowerCase().indexOf(filterTextLower) >= 0) return true
        if (org.coverage_areas.map(x => x.toLowerCase()).some(x => x.startsWith(filterTextLower))) return true
        return false
      }).sort(compareOrgs)
    }
  },
  methods: {
    fetchSuggestions(queryString, cb) {
      if (queryString === '') {
        return cb(this.allRegions.map(x => {
          return {'value': x}
        }))
      }
      const matchedRegions = this.allRegions.filter(region =>
        region.toLowerCase().startsWith(queryString)
      ).map(x => {
        return {'value': x}
      })
      cb(matchedRegions)
    },
    getAllRegions() {
      const allOrgs = Object.values(orgs).filter(org => org.test_only !== true)
      const allRegions = []
      allOrgs.forEach(org => {
        if (org.coverage_areas && org.coverage_areas.length) {
          org.coverage_areas.forEach(area => {
            allRegions.push(area)
          })
        }
      })
      return allRegions.sort()
    },
    autocompleteSelected(item) {
      const matchedOrgs = Object.values(this.orgs).filter(org =>
        org.coverage_areas.includes(item.value)
      )
      if (matchedOrgs.length === 1) {
        const org = matchedOrgs[0]
        this.orgIndex = org.id
        this.showDialog = true
      } else {
        console.log(`Matched ${matchedOrgs.length} regions.`)
      }
    }
  },
  mounted() {
    this.allRegions = this.getAllRegions()
  }
}

function compareOrgs(org1, org2) {
  if (org1.id > org2.id) {
    return 1
  } else {
    return -1
  }
}
</script>

<style>
.orgsbody {
  /* line-height: 12px; */
  text-align: start;
}
</style>

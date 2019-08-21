
foo = {
  "gvlSpecificationVersion": 2,
  "vendorListVersion": 133, // incremented with each published file change
  "tcfPolicyVersion": 2, // The TCF MO will increment this value whenever a GVL change (such as adding a new Purpose or Feature or a change in Purpose wording) legally invalidates existing TC Strings and requires CMPs to re-establish transparency and consent from users. TCF Policy changes should be relatively infrequent and only occur when necessary to support changes in global mandate. If the policy version number in the latest GVL is different from the value in your TC String, then you need to re-establish transparency and consent for that user. A version 1 format TC String is considered to have a version value of 1.
  "lastUpdated": "2018-05-28T00:00:00Z",
  "purposes": {

    /**
     * Information published for each Purpose
     * 
     * "id": number, REQUIRED
     * "name": string, REQUIRED
     * "description": string, REQUIRED
     * "descriptionLegal": string, REQUIRED
     * "consentable": boolean, OPTIONAL, default=true  false means CMPs should never afford users the means to provide an opt-in consent choice
     * "rightToObject": boolean, OPTIONAL, default=true  false means CMPs should never afford users the means to exercise a right to object
    */
    "1": {
      "id": 1,
      "name": "Storage and access of information",
      "description": "...",
      "descriptionLegal": "..."
    },
    // ... more purposes from id=2 to id=9 (up to no higher than id=24)
    "10": {
      "id": 10,
      "name": "Develop and improve product",
      "description": "...",
      "descriptionLegal": "...",
      "consentable": false,
      "rightToObject": false
    }
  },
  "specialPurposes" : {
    "1": {
      "id": 1,
      "name": "Security, Fraud Prevention, Debugging",
      "description": "...",
      "descriptionLegal": "...",
      "consentable": false,
      "rightToObject": false
    },
    "2": {
      "id": 2,
      "name": "Technical ad and content delivery",
      "description": "...",
      "descriptionLegal": "...",
      "consentable": false,
      "rightToObject": false
    }
  },
  "features" : {
    "1": {
      "id": 1,
      "name": "Matching Data to Offline Sources",
      "description": "Combining data from offline sources that were initially collected in other contexts",
      "descriptionLegal": "..."
    }

  // ... more features from id=2 up to no higher than id=64.
    
  },

  /**
   * Special features differ from simple features in that CMPs MUST provide
   * users with a means to signal an opt-in choice as to whether vendors
   * may employ the feature when performing any purpose processing.
   * See Policies for specifics.
   */
  "specialFeatures" : {
    "1": {
      "id": 1,
      "name": "Precise Geolocation",
      "description": "...",
      "descriptionLegal": "..."
    },
    "2": {
      "id": 2,
      "name": "Active Fingerprinting",
      "description": "...",
      "descriptionLegal": "..."
    }

  // ... more special features from id=3 up to no higher than id=8.
    //
  },
  "vendors": {
  /**
   * Information published for each vendor
   *
   * "id": numeric, REQUIRED
   *
   * "name": string, REQUIRED
   *
   * "purposes": array of positive integers, either purposes or
   *
   * "legIntPurposes" REQUIRED. Array may be empty. List of purpose ids
   * declared as performed on the legal basis of consent
   *
   * "specialPurposes": array of positive integers, OPTIONAL. Array may be
   * empty. List of Special Purposes declared as performed on the legal basis
   * of a legitimate interest
   *
   * "flexiblePurposes": array of positive integers, OPTIONAL. Array may be
   * empty. List of purpose ids where the vendor is flexible regarding the
   * legal basis; they will perform the processing based on consent or a
   * legitimate interest. The 'default' is determined by which of the other two
   * mutually-exclusive purpose fields is used to declare the purpose for the
   * vendor
   *
   * Constraints:
   *   Either purposes OR legIntPurposes can be missing/empty, but not
   *   both.
   *
   *   A Purpose id must not be present in both purposes and legIntPurposes
   *
   *   A Purpose id listed in flexiblePurposes must have been declared in one
   *   of purposes or legIntPurposes.
   *
   *   Purpose id values included in the three purpose fields must be in the
   *   range from 1 to N, where N is the highest purpose id published in this
   *   GVL file.
   *
   * "features": array of positive integers, OPTIONAL. Array may be empty. List
   * of Features the Vendor may utilize when performing some declared Purposes
   * processing.
   *
   * "specialfeatures": array of positive integers, OPTIONAL. Array may be
   * empty. List of Special Features the Vendor may utilize when performing
   * some declared Purposes processing.
   *
   * "SpecialPurposes": array of positive integers, OPTIONAL. Array may be
   * empty. List of Special Purposes declared as performed on the legal basis
   * of a legitimate interest
   *
   * "policyUrl": url string, REQUIRED URL to the Vendor's privacy policy
   * document.
   *
   * "deletedDate": date string ("2019-05-28T00:00:00Z") OPTIONAL, If present,
   * vendor is considered deleted after this date/time and MUST NOT be
   * established to users.
   *
   * "overflow": object specifying the vendor's http GET request length  limit
   * OPTIONAL. Has the following members & values
   *
   *   "overflow": {
   *     "httpGetLimit": 32   /* 32 or 128 are supported options */
   *   }
   *    If a vendor entry does not include this attribute then the vendor has no
   *    overflow options and none can be inferred.
   */

  "1":{
    "id": 1,
    "name": "Vendor Name",
    "purposes": [1],
    "specialPurposes": [1],
    "legIntPurposes": [2, 3],
    "flexiblePurposes": [1, 2],
    "features": [1, 2],
    "specialfeatures": [1, 2],
    "policyUrl": "https://vendorname.com/gdpr.html",
    "deletedDate": "2019-02-28T00:00:00Z",
    "overflow": {
      "httpGetLimit": 32   /* 32 or 128 are supported options */
      }
    }
  // ... more vendors
  },

  "stacks": {
    "1": {
      "id": 1,
      "purposes" : [1,2,3 ...],
      "specialPurposes" : [1,2,3 ...],
      "name" : "...",
      "description" : "...",
    }
  }
}

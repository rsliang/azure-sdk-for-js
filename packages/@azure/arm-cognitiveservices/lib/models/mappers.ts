/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        readOnly: true,
        serializedName: "tier",
        type: {
          name: "Enum",
          allowedValues: [
            "Free",
            "Standard",
            "Premium"
          ]
        }
      }
    }
  }
};

export const CognitiveServicesAccountCreateParameters: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountCreateParameters",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountCreateParameters",
    modelProperties: {
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      properties: {
        required: true,
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const CognitiveServicesAccountUpdateParameters: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountUpdateParameters",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountUpdateParameters",
    modelProperties: {
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const CognitiveServicesAccountProperties: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountProperties",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountProperties",
    modelProperties: {
      provisioningState: {
        readOnly: true,
        serializedName: "provisioningState",
        type: {
          name: "String"
        }
      },
      endpoint: {
        serializedName: "endpoint",
        type: {
          name: "String"
        }
      },
      internalId: {
        serializedName: "internalId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CognitiveServicesAccount: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccount",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccount",
    modelProperties: {
      etag: {
        serializedName: "etag",
        type: {
          name: "String"
        }
      },
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      endpoint: {
        serializedName: "properties.endpoint",
        type: {
          name: "String"
        }
      },
      internalId: {
        serializedName: "properties.internalId",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CognitiveServicesAccountKeys: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountKeys",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountKeys",
    modelProperties: {
      key1: {
        serializedName: "key1",
        type: {
          name: "String"
        }
      },
      key2: {
        serializedName: "key2",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegenerateKeyParameters: msRest.CompositeMapper = {
  serializedName: "RegenerateKeyParameters",
  type: {
    name: "Composite",
    className: "RegenerateKeyParameters",
    modelProperties: {
      keyName: {
        required: true,
        serializedName: "keyName",
        type: {
          name: "Enum",
          allowedValues: [
            "Key1",
            "Key2"
          ]
        }
      }
    }
  }
};

export const CognitiveServicesResourceAndSku: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesResourceAndSku",
  type: {
    name: "Composite",
    className: "CognitiveServicesResourceAndSku",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      }
    }
  }
};

export const CognitiveServicesAccountEnumerateSkusResult: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountEnumerateSkusResult",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountEnumerateSkusResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CognitiveServicesResourceAndSku"
            }
          }
        }
      }
    }
  }
};

export const MetricName: msRest.CompositeMapper = {
  serializedName: "MetricName",
  type: {
    name: "Composite",
    className: "MetricName",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      localizedValue: {
        readOnly: true,
        serializedName: "localizedValue",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Usage: msRest.CompositeMapper = {
  serializedName: "Usage",
  type: {
    name: "Composite",
    className: "Usage",
    modelProperties: {
      unit: {
        serializedName: "unit",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "Composite",
          className: "MetricName"
        }
      },
      quotaPeriod: {
        readOnly: true,
        serializedName: "quotaPeriod",
        type: {
          name: "String"
        }
      },
      limit: {
        readOnly: true,
        serializedName: "limit",
        type: {
          name: "Number"
        }
      },
      currentValue: {
        readOnly: true,
        serializedName: "currentValue",
        type: {
          name: "Number"
        }
      },
      nextResetTime: {
        readOnly: true,
        serializedName: "nextResetTime",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UsagesResult: msRest.CompositeMapper = {
  serializedName: "UsagesResult",
  type: {
    name: "Composite",
    className: "UsagesResult",
    modelProperties: {
      value: {
        readOnly: true,
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Usage"
            }
          }
        }
      }
    }
  }
};

export const ErrorBody: msRest.CompositeMapper = {
  serializedName: "ErrorBody",
  type: {
    name: "Composite",
    className: "ErrorBody",
    modelProperties: {
      code: {
        required: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        required: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorBody"
        }
      }
    }
  }
};

export const OperationDisplayInfo: msRest.CompositeMapper = {
  serializedName: "OperationDisplayInfo",
  type: {
    name: "Composite",
    className: "OperationDisplayInfo",
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationEntity: msRest.CompositeMapper = {
  serializedName: "OperationEntity",
  type: {
    name: "Composite",
    className: "OperationEntity",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplayInfo"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const CheckSkuAvailabilityParameter: msRest.CompositeMapper = {
  serializedName: "CheckSkuAvailabilityParameter",
  type: {
    name: "Composite",
    className: "CheckSkuAvailabilityParameter",
    modelProperties: {
      skus: {
        required: true,
        serializedName: "skus",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckSkuAvailabilityResult: msRest.CompositeMapper = {
  serializedName: "CheckSkuAvailabilityResult",
  type: {
    name: "Composite",
    className: "CheckSkuAvailabilityResult",
    modelProperties: {
      kind: {
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      skuName: {
        serializedName: "skuName",
        type: {
          name: "String"
        }
      },
      skuAvailable: {
        serializedName: "skuAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckSkuAvailabilityResultList: msRest.CompositeMapper = {
  serializedName: "CheckSkuAvailabilityResultList",
  type: {
    name: "Composite",
    className: "CheckSkuAvailabilityResultList",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CheckSkuAvailabilityResult"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkuRestrictionInfo: msRest.CompositeMapper = {
  serializedName: "ResourceSkuRestrictionInfo",
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictionInfo",
    modelProperties: {
      locations: {
        readOnly: true,
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      zones: {
        readOnly: true,
        serializedName: "zones",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkuRestrictions: msRest.CompositeMapper = {
  serializedName: "ResourceSkuRestrictions",
  type: {
    name: "Composite",
    className: "ResourceSkuRestrictions",
    modelProperties: {
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "Location",
            "Zone"
          ]
        }
      },
      values: {
        readOnly: true,
        serializedName: "values",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      restrictionInfo: {
        readOnly: true,
        serializedName: "restrictionInfo",
        type: {
          name: "Composite",
          className: "ResourceSkuRestrictionInfo"
        }
      },
      reasonCode: {
        readOnly: true,
        serializedName: "reasonCode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceSku: msRest.CompositeMapper = {
  serializedName: "ResourceSku",
  type: {
    name: "Composite",
    className: "ResourceSku",
    modelProperties: {
      resourceType: {
        readOnly: true,
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        readOnly: true,
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      kind: {
        readOnly: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      locations: {
        readOnly: true,
        serializedName: "locations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      restrictions: {
        readOnly: true,
        serializedName: "restrictions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSkuRestrictions"
            }
          }
        }
      }
    }
  }
};

export const CognitiveServicesAccountListResult: msRest.CompositeMapper = {
  serializedName: "CognitiveServicesAccountListResult",
  type: {
    name: "Composite",
    className: "CognitiveServicesAccountListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CognitiveServicesAccount"
            }
          }
        }
      }
    }
  }
};

export const ResourceSkusResult: msRest.CompositeMapper = {
  serializedName: "ResourceSkusResult",
  type: {
    name: "Composite",
    className: "ResourceSkusResult",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceSku"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationEntityListResult: msRest.CompositeMapper = {
  serializedName: "OperationEntityListResult",
  type: {
    name: "Composite",
    className: "OperationEntityListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "OperationEntity"
            }
          }
        }
      }
    }
  }
};
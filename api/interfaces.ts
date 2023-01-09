/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface District {
  state_id: number;
  district_id: number;
  district_name: string;
}

export interface paths {
  '/api/v1/cvc': {
    post: operations['Search'];
  };
  '/api/v1/volunteer/call_request': {
    post: operations['CallRequest'];
  };
  '/api/v1/volunteer/report': {
    post: operations['Report'];
  };
}

export interface components {
  schemas: {
    CVCTypeEnum: 'UNKNOWN' | 'CENTRAL' | 'STATE' | 'PRIVATE';
    CVCSiteAddress: {
      block: string;
      district: string;
      state: string;
      city?: string;
      pincode: string;
    };

    CVCOperationTime: {
      /** Format: HH:MM */
      start_time: string;
      /** Format: HH:MM */
      end_time: string;
    };

    GeoPoint: {
      latitude: string;
      longitude: string;
    };

    CVCStatusEnum: 'UNKNOWN' | 'ACTIVE' | 'CLOSED' | 'OUT_OF_STOCK';
    VaccineTypeEnum: 'UNKNOWN' | 'COVAXIN' | 'COVISHIELD';
    Vaccine: {
      name: string;
      type: components['schemas']['VaccineTypeEnum'];
      count: number;
      cost: number;
    };

    CVCResponseData: {
      id: string;
      name: string;
      cowin_center_id: number;
      type: components['schemas']['CVCTypeEnum'];
      address: components['schemas']['CVCSiteAddress'];
      last_verified_at: string;
      slots: components['schemas']['CVCOperationTime'][];
      operation_timings: components['schemas']['CVCOperationTime'];
      geo?: components['schemas']['GeoPoint'];
      vaccine_count: number;
      status: components['schemas']['CVCStatusEnum'];
      next_stock_refresh_on?: string;
      google_maps_url: string;
      vaccines: components['schemas']['Vaccine'][];
    };

    PaginatedCVCData: {
      total: number;
      page_number: number;
      page_size: number;
      results: components['schemas']['CVCResponseData'][];
    };

    SortOrderEnum: 'ASC' | 'DESC';
    CVCRequest: {
      /**
       * Name of the district.
       * Either this or pincode is required
       */
      district?: string;
      /** Cowin district id */
      district_id?: number;
      /**
       * Pincode to search with.
       * Either this or district is required
       */
      pincode?: number;
      page_number?: number;
      page_size?: number;
      sort?: {
        vaccine_count?: components['schemas']['SortOrderEnum'];
        distance?: components['schemas']['SortOrderEnum'];
      };
      filter?: {
        availability?: boolean;
        status?: components['schemas']['CVCStatusEnum'][];
        radius?: number;
        vaccines?: components['schemas']['VaccineTypeEnum'][];
      };
    };

    CallRequest: {
      pincode?: number;
      cvc_site_id?: string;
      /** if set tp true, will lock the cvc for 20 minutes */
      claim?: boolean;
    };
    CallResponseEnum: 'RESPONDED' | 'NOT_RESPONDED' | 'WRONG_NUMBER';
    ReportRequest: {
      cvc_site_id?: string;
      call_response?: components['schemas']['CallResponseEnum'];
      status?: components['schemas']['CVCStatusEnum'];
      cvcType?: components['schemas']['CVCTypeEnum'];
      vaccines?: components['schemas']['Vaccine'][];
      address?: components['schemas']['CVCSiteAddress'];
      operation_timings?: components['schemas']['CVCOperationTime'][];
      next_stock_refresh_on?: string;
      verification_time?: string;
    };
  };
  responses: {};
  parameters: {};
  requestBodies: {};
  headers: {};
}

export interface operations {
  Search: {
    parameters: {};
    responses: {
      /** Ok */
      200: {
        content: {
          'application/json': components['schemas']['PaginatedCVCData'];
        };
      };
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['CVCRequest'];
      };
    };
  };

  CallRequest: {
    parameters: {};
    responses: {
      /** No content */
      204: never;
    };

    requestBody: {
      content: {
        'application/json': components['schemas']['CallRequest'];
      };
    };
  };

  Report: {
    parameters: {};
    responses: {
      /** No content */
      204: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ReportRequest'];
      };
    };
  };
}

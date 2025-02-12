/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MapTest
 */
export interface MapTest {
    /**
     * 
     * @type {{ [key: string]: { [key: string]: string; }; }}
     * @memberof MapTest
     */
    mapMapOfString?: { [key: string]: { [key: string]: string; }; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MapTest
     */
    mapOfEnumString?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof MapTest
     */
    directMap?: { [key: string]: boolean; };
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof MapTest
     */
    indirectMap?: { [key: string]: boolean; };
}


/**
 * @export
 */
export const MapTestMapOfEnumStringEnum = {
    Upper: 'UPPER' as 'UPPER',
    Lower: 'lower' as 'lower'
};
export type MapTestMapOfEnumStringEnum = typeof MapTestMapOfEnumStringEnum[keyof typeof MapTestMapOfEnumStringEnum];


export function MapTestFromJSON(json: any): MapTest {
    return MapTestFromJSONTyped(json, false);
}

export function MapTestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MapTest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mapMapOfString': !exists(json, 'map_map_of_string') ? undefined : json['map_map_of_string'],
        'mapOfEnumString': !exists(json, 'map_of_enum_string') ? undefined : json['map_of_enum_string'],
        'directMap': !exists(json, 'direct_map') ? undefined : json['direct_map'],
        'indirectMap': !exists(json, 'indirect_map') ? undefined : json['indirect_map'],
    };
}

export function MapTestToJSON(value?: MapTest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'map_map_of_string': value.mapMapOfString,
        'map_of_enum_string': value.mapOfEnumString,
        'direct_map': value.directMap,
        'indirect_map': value.indirectMap,
    };
}


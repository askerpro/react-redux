/* eslint-disable global-require */
import { textures as bertaLite58Data } from 'static/images/profiles/silver-eco-classic/animations/profile-card/data.json';
import HandlesData, { Handles } from '../equipments/handles';
import GlassesData, { Glasses } from '../equipments/glasses';
import SealantsData, { Sealants } from '../equipments/sealants';
import ShtapicksData, { Shtapicks } from '../equipments/shtapicks';
import FurnituresData, { Furnitures } from '../equipments/furnitures';
import LaminationsData, { Laminations } from '../equipments/laminations';
import SpecificationData, { Specifications } from './specifications';
import { ProfileVisualParamValues, ProfileVisualParams, Texture } from './interfaces';

import { EquipmentData } from '../equipments/interfaces';

export enum Profiles {
  BERTA_SILVER_ECO_CLASSIC,
  BERTA_SILVER_ECO_PREMIUM,
  BERTA_LITE,
}

export enum Equipments {
  FURNITURE,
  HANDLES,
  GLASS,
  SHTAPICKS,
  SEALANTS,
}

export interface ProfileData extends ProfileVisualParamValues {
  name: string;

  description: string;

  framesPath: string;

  textures: Texture[];

  scheme: string;

  icon: string;

  link?: string;

  specifiactions: {
    [Specifications.MONTAGE_DEEP]: SpecificationData;
    [Specifications.AIR_CHAMBERS]: SpecificationData;
    [Specifications.ARM_THICKNESS]: SpecificationData;
    [Specifications.PLASTIC_THICKNESS]: SpecificationData;
    [Specifications.LAMINATION]: SpecificationData;
    [Specifications.GLASS_WIDTH]: SpecificationData;
  };

  equipments: {
    [Equipments.FURNITURE]: EquipmentData;
    [Equipments.HANDLES]: EquipmentData;
    [Equipments.GLASS]: EquipmentData;
    [Equipments.SHTAPICKS]: EquipmentData;
    [Equipments.SEALANTS]: EquipmentData;
  };
}

const profilesData: ProfileData[] = [];

profilesData[Profiles.BERTA_SILVER_ECO_CLASSIC] = {
  name: 'Silver Eco Classic',
  description:
    'Это инновационный, экологически чистый и безопасный для здоровья продукт с содержанием серебра по уникальной запатентованной технологии Silver Eco.',
  textures: bertaLite58Data,
  framesPath: '/static/images/profiles/silver-eco-classic/animations/profile-card/',
  scheme: '/static/images/profiles/silver-eco-classic/scheme.png',
  icon: '/images/profiles/berta-lite-58/silver-eco-classic.jpg',
  visualParamValues: {
    [ProfileVisualParams.WARM]: 60,
    [ProfileVisualParams.DESIGN]: 55,
    [ProfileVisualParams.COMFORT]: 68,
  },
  specifiactions: {
    [Specifications.AIR_CHAMBERS]: new SpecificationData(Specifications.AIR_CHAMBERS, ['4']),
    [Specifications.ARM_THICKNESS]: new SpecificationData(Specifications.ARM_THICKNESS, ['1.5']),
    [Specifications.LAMINATION]: new SpecificationData(Specifications.LAMINATION, [
      LaminationsData[Laminations.ONE_SIDE],
    ]),
    [Specifications.GLASS_WIDTH]: new SpecificationData(Specifications.GLASS_WIDTH, ['24']),
    [Specifications.MONTAGE_DEEP]: new SpecificationData(Specifications.MONTAGE_DEEP, ['60']),
    [Specifications.PLASTIC_THICKNESS]: new SpecificationData(Specifications.PLASTIC_THICKNESS, [
      '2.8',
    ]),
  },
  equipments: {
    [Equipments.FURNITURE]: new FurnituresData([Furnitures.INTERNIKA]),
    [Equipments.HANDLES]: new HandlesData([
      Handles.HOPPE,
      Handles.ANTIBAKTERIAL,
      Handles.BERTA_ACUSTIC,
      Handles.BERTA_STANDART,
    ]),
    [Equipments.GLASS]: new GlassesData([Glasses.STANDART, Glasses.TERMOS, Glasses.ENERGO]),
    [Equipments.SEALANTS]: new SealantsData([Sealants.EPDM_GRAY]),
    [Equipments.SHTAPICKS]: new ShtapicksData([Shtapicks.FACETED]),
  },
};

profilesData[Profiles.BERTA_LITE] = {
  ...profilesData[Profiles.BERTA_SILVER_ECO_CLASSIC],
  name: 'Berta Lite',
};

profilesData[Profiles.BERTA_SILVER_ECO_PREMIUM] = {
  ...profilesData[Profiles.BERTA_SILVER_ECO_CLASSIC],
  name: 'Silver Eco Premium',
};

// profilesData[Profiles.BERTA_SILVER_ECO_PREMIUM] = {
//   name: 'Silver Eco Premium',
//   description:
//     'Это инновационный, экологически чистый и безопасный для здоровья продукт с содержанием серебра по уникальной запатентованной технологии Silver Eco.',
//   animationPath: 'silver-eco-premium',
//   icon: '/static/img/profiles/silver-eco-premium.jpg',
//   visualParamValues: {
//     [ProfileVisualParams.WARM]: 60,
//     [ProfileVisualParams.DESIGN]: 55,
//     [ProfileVisualParams.COMFORT]: 68,
//   },
//   specifiactions: {
//     [Specifications.AIR_CHAMBERS]: ['5'],
//     [Specifications.ARM_THICKNESS]: ['1.5'],
//     [Specifications.LAMINATION]: [laminations[Laminations.ONE_SIDE]],
//     [Specifications.GLASS_WIDTH]: ['24', '32'],
//     [Specifications.MONTAGE_DEEP]: ['72'],
//     [Specifications.PLASTIC_THICKNESS]: ['2.8'],
//   },
//   equpments: {
//     [Equpments.FURNITURE]: [furnitures[Furnitures.INTERNIKA]],
//     [Equpments.HANDLES]: [
//       handles[Handles.HOPPE],
//       handles[Handles.ANTIBAKTERIAL],
//       handles[Handles.BERTA_ACUSTIC],
//       handles[Handles.BERTA_STANDART],
//     ],
//     [Equpments.GLASS]: [
//       glasses[Glasses.STANDART],
//       glasses[Glasses.TERMOS],
//       glasses[Glasses.ENERGO],
//     ],
//     [Equpments.SHTAPICKS]: [shtapicks[Shtapicks.FACETED]],
//     [Equpments.SEALANTS]: [sealants[Sealants.EPDM_GRAY]],
//   },
// };

// profilesData[Profiles.BERTA_LITE] = {
//   name: 'Berta Lite 58',
//   description:
//     'Профильная система российского производства. Полностью соответсвует всем требованиям ГОСТ.',
//   animationPath: 'berta-lite-58',
//   icon: '/static/img/profiles/berta-lite-58.jpg',
//   visualParamValues: {
//     [ProfileVisualParams.WARM]: 50,
//     [ProfileVisualParams.DESIGN]: 53,
//     [ProfileVisualParams.COMFORT]: 57,
//   },
//   specifiactions: {
//     [Specifications.AIR_CHAMBERS]: ['3'],
//     [Specifications.ARM_THICKNESS]: ['1.2'],
//     [Specifications.LAMINATION]: [laminations[Laminations.ONE_SIDE]],
//     [Specifications.GLASS_WIDTH]: ['24'],
//     [Specifications.MONTAGE_DEEP]: ['58'],
//     [Specifications.PLASTIC_THICKNESS]: ['2.8'],
//   },
//   equpments: {
//     [Equpments.FURNITURE]: [furnitures[Furnitures.INTERNIKA]],
//     [Equpments.HANDLES]: [handles[Handles.HOPPE]],
//     [Equpments.GLASS]: [
//       glasses[Glasses.STANDART],
//       glasses[Glasses.TERMOS],
//       glasses[Glasses.ENERGO],
//     ],
//     [Equpments.SHTAPICKS]: [shtapicks[Shtapicks.ANTIK]],
//     [Equpments.SEALANTS]: [sealants[Sealants.EPDM_BLACK]],
//   },
// };

export default profilesData;

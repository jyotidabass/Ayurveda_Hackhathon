/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const functions = require('firebase-functions');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

//Global parameters
let system = 'ayurveda';
let metric = 'weight';
let author = 'api';

//JSON data for unit conversions
let data_field = {
    "ayurveda": {
        "charaka": {
            "weight": {
                "anu": 0,
                "paramanu": 0,
                "truti": 0,
                "liksha": 0,
                "vanshi": 0,
                "dhwanshi": 0.00005425,
                "trasrenu": 0,
                "yuka": 0,
                "maricha": 0.0003255,
                "raja": 0,
                "rajika": 0,
                "rakta sarshapa": 0.0019531,
                "sarshapa": 0,
                "tandula": 0.015625,
                "dhanyamasha": 0.03125,
                "yava": 0.0625,
                "ratti": 0,
                "gunja": 0,
                "andika": 0.250,
                "suvarna mashaka": 0,
                "valla": 0,
                "nishpava": 0,
                "mashaka": 1,
                "hema": 1,
                "dhamaka": 0,
                "dhanyaka": 1,
                "masha": 0,
                "shana": 3,
                "tanka": 0,
                "nishka": 0,
                "kala": 0,
                "kola": 6,
                "kshudraka": 0,
                "kshudra": 0,
                "morataka": 0,
                "vataka": 0,
                "drankshana": 6,
                "badara": 6,
                "suvarna": 12,
                "dharana": 0,
                "karsha": 12,
                "panimanika": 0,
                "aksha": 12,
                "pichu": 12,
                "panitala": 12,
                "kinchitpani": 0,
                "tinduka": 12,
                "vidalpadaka": 12,
                "shodashika": 48,
                "karamadhya": 0,
                "hansapada": 0,
                "kavalagraha": 12,
                "udumbara": 0,
                "tola": 0,
                "nishkachatushtya": 0,
                "shukti": 24,
                "palardha": 24,
                "ardhapala": 0,
                "ashtamika": 24,
                "pala": 48,
                "mushti": 48,
                "amra": 48,
                "chaturthika": 48,
                "prakuncha": 48,
                "shodashi": 0,
                "bilva": 48,
                "prasrita": 96,
                "kudava": 192,
                "anjali": 192,
                "ardhasharavaka": 0,
                "ashtamana": 96,
                "manika": 384,
                "sharava": 0,
                "ashtapala": 0,
                "prastha": 768,
                "shubha": 0,
                "adhaka": 3072,
                "bhajana": 0,
                "kansapatra": 0,
                "patraka": 0,
                "tula": 4800,
                "drona": 12288,
                "kalasha": 12288,
                "nalvana": 12288,
                "armana": 12288,
                "unmana": 12288,
                "ghata": 12288,
                "rashi": 0,
                "shurpa": 24576,
                "kumbha": 24576,
                "droni": 0,
                "vahi": 0,
                "goni": 49152,
                "bhara": 49152,
                "khari": 49152,
                "vaha": 786432,
                "gram": 1,
                "kilogram": 1000
            },
            "time": {

            },
            "length": {

            }
        },
        "sushruta": {
            "weight": {
                "anu": 0,
                "paramanu": 0,
                "truti": 0,
                "liksha": 0,
                "vanshi": 0,
                "dhwanshi": 0,
                "trasrenu": 0,
                "yuka": 0,
                "maricha": 0,
                "raja": 0,
                "rajika": 0,
                "rakta sarshapa": 0,
                "sarshapa": 0,
                "tandula": 0,
                "dhanyamasha": 0,
                "yava": 0,
                "ratti": 0,
                "gunja": 0,
                "andika": 0,
                "suvarna mashaka": 0.375,
                "valla": 0,
                "nishpava": 0.42105,
                "mashaka": 0,
                "hema": 0,
                "dhamaka": 0,
                "dhanyaka": 0,
                "masha": 0,
                "shana": 0,
                "tanka": 0,
                "nishka": 0,
                "kala": 0,
                "kola": 0,
                "kshudraka": 0,
                "kshudra": 0,
                "morataka": 0,
                "vataka": 0,
                "drankshana": 0,
                "badara": 0,
                "suvarna": 6,
                "dharana": 8,
                "karsha": 12,
                "panimanika": 0,
                "aksha": 0,
                "pichu": 0,
                "panitala": 0,
                "kinchitpani": 0,
                "tinduka": 0,
                "vidalpadaka": 0,
                "shodashika": 0,
                "karamadhya": 0,
                "hansapada": 0,
                "kavalagraha": 0,
                "udumbara": 0,
                "tola": 0,
                "nishkachatushtya": 0,
                "shukti": 0,
                "palardha": 0,
                "ardhapala": 0,
                "ashtamika": 0,
                "pala": 48,
                "mushti": 0,
                "amra": 0,
                "chaturthika": 0,
                "prakuncha": 0,
                "shodashi": 0,
                "bilva": 0,
                "prasrita": 0,
                "kudava": 192,
                "anjali": 0,
                "ardhasharavaka": 0,
                "ashtamana": 0,
                "manika": 0,
                "sharava": 0,
                "ashtapala": 0,
                "prastha": 768,
                "shubha": 0,
                "adhaka": 3072,
                "bhajana": 0,
                "kansapatra": 0,
                "patraka": 0,
                "tula": 4800,
                "drona": 12288,
                "kalasha": 0,
                "nalvana": 0,
                "armana": 0,
                "unmana": 0,
                "ghata": 0,
                "rashi": 0,
                "shurpa": 0,
                "kumbha": 0,
                "droni": 0,
                "vahi": 0,
                "goni": 0,
                "bhara": 96000,
                "khari": 0,
                "vaha": 0,
                "gram": 1,
                "kilogram": 1000
            },
            "time": {
                "ksanas": 0,
                "lava": 0,
                "nimesha": 0,
                "kashtha": 4.66,
                "kala": 140,
                "ghati": 0,
                "muhurta": 2880,
                "ahoratra": 86400,
                "paksha": 1296000,
                "masa": 2592000,
                "ritu": 5184000,
                "ayana": 15552000,
                "samvatsara": 31104000,
                "yuga": 155520000,
                "ahoratra deva": 0,
                "ahoratra pitra": 0,
                "second": 1,
                "minute": 60,
                "hour": 3600,
                "day": 86400,
                "month": 2592000,
                "year": 15552000
            },
            "length": {
                
            }
        },
        "sharangadhara": {
            "weight": {
                "anu": 0,
                "paramanu": 0.0000012,
                "truti": 0,
                "liksha": 0,
                "vanshi": 0.0000361,
                "dhwanshi": 0,
                "trasrenu": 0.0000361,
                "yuka": 0,
                "maricha": 0.000217,
                "raja": 0,
                "rajika": 0.001302,
                "rakta sarshapa": 0,
                "sarshapa": 0.003906,
                "tandula": 0,
                "dhanyamasha": 0,
                "yava": 0.03125,
                "ratti": 0.125,
                "gunja": 0.125,
                "andika": 0,
                "suvarna mashaka": 0,
                "valla": 0,
                "nishpava": 0,
                "mashaka": 0.750,
                "hema": 0.750,
                "dhamaka": 0,
                "dhanyaka": 0.750,
                "masha": 0,
                "shana": 3,
                "tanka": 3,
                "nishka": 0,
                "kala": 0,
                "kola": 6,
                "kshudraka": 6,
                "kshudra": 0,
                "morataka": 0,
                "vataka": 6,
                "drankshana": 6,
                "badara": 0,
                "suvarna": 12,
                "dharana": 3,
                "karsha": 12,
                "panimanika": 12,
                "aksha": 12,
                "pichu": 12,
                "panitala": 12,
                "kinchitpani": 12,
                "tinduka": 12,
                "vidalpadaka": 12,
                "shodashika": 12,
                "karamadhya": 12,
                "hansapada": 12,
                "kavalagraha": 12,
                "udumbara": 12,
                "tola": 0,
                "nishkachatushtya": 0,
                "shukti": 24,
                "palardha": 0,
                "ardhapala": 24,
                "ashtamika": 24,
                "pala": 48,
                "mushti": 48,
                "amra": 48,
                "chaturthika": 48,
                "prakuncha": 48,
                "shodashi": 48,
                "bilva": 48,
                "prasrita": 96,
                "kudava": 192,
                "anjali": 192,
                "ardhasharavaka": 192,
                "ashtamana": 192,
                "manika": 384,
                "sharava": 384,
                "ashtapala": 384,
                "prastha": 768,
                "shubha": 0,
                "adhaka": 3072,
                "bhajana": 3072,
                "kansapatra": 3072, 
                "patraka": 0,
                "tula": 4800,
                "drona": 12288,
                "kalasha": 12288,
                "nalvana": 12288,
                "armana": 12288,
                "unmana": 12288,
                "ghata": 12288,
                "rashi": 12288,
                "shurpa": 24576,
                "kumbha": 24576,
                "droni": 49152,
                "vahi": 49152,
                "goni": 49152,
                "bhara": 96000,
                "khari": 190608,
                "vaha": 0,
                "gram": 1,
                "kilogram": 1000

            },
            "time": {

            },
            "length": {
                
            }
        },
        "rrs": {
            "weight": {
                "anu": 0.0000004463,
                "paramanu": 0,
                "truti": 0.000002678,
                "liksha": 0.00001607,
                "vanshi": 0,
                "dhwanshi": 0,
                "trasrenu": 0,
                "yuka": 0.00009645,
                "maricha": 0,
                "raja": 0.0005787,
                "rajika": 0,
                "rakta sarshapa": 0,
                "sarshapa": 0.003472,
                "tandula": 0,
                "dhanyamasha": 0,
                "yava": 0.020833,
                "ratti": 0,
                "gunja": 0.125,
                "andika": 0,
                "suvarna mashaka": 0,
                "valla": 0.375,
                "nishpava": 0.250,
                "mashaka": 0,
                "hema": 0,
                "dhamaka": 0,
                "dhanyaka": 0,
                "masha": 0.750,
                "shana": 0.3,
                "tanka": 0,
                "nishka": 0.3,
                "kala": 0.3,
                "kola": 0.6,
                "kshudraka": 0,
                "kshudra": 0,
                "morataka": 0,
                "vataka": 0.6,
                "drankshana": 0,
                "badara": 0,
                "suvarna": 12,
                "dharana": 1.5,
                "karsha": 12,
                "panimanika": 0,
                "aksha": 12,
                "pichu": 0,
                "panitala": 12,
                "kinchitpani": 0,
                "tinduka": 0,
                "vidalpadaka": 12,
                "shodashika": 0,
                "karamadhya": 0,
                "hansapada": 0,
                "kavalagraha": 12,
                "udumbara": 12,
                "tola": 12,
                "nishkachatushtya": 12,
                "shukti": 24,
                "palardha": 0,
                "ardhapala": 0,
                "ashtamika": 0,
                "pala": 48,
                "mushti": 48,
                "amra": 0,
                "chaturthika": 0,
                "prakuncha": 48,
                "shodashi": 0,
                "bilva": 48,
                "prasrita": 96,
                "kudava": 192,
                "anjali": 192,
                "ardhasharavaka": 0,
                "ashtamana": 0,
                "manika": 384,
                "sharava": 0,
                "ashtapala": 0,
                "prastha": 768,
                "shubha": 1536,
                "adhaka": 3072,
                "bhajana": 0,
                "kansapatra": 0,
                "patraka": 3072,
                "tula": 4800,
                "drona": 0,
                "kalasha": 0,
                "nalvana": 0,
                "armana": 0,
                "unmana": 0,
                "ghata": 0,
                "rashi": 0,
                "shurpa": 0,
                "kumbha": 0,
                "droni": 0,
                "vahi": 0,
                "goni": 0,
                "bhara": 0,
                "khari": 0,
                "vaha": 0,
                "gram": 1,
                "kilogram": 1000
            },
            "time": {

            },
            "length": {
                
            }
        },
        "vaidyaka paribhasha pradeepa": {
            "weight": {
                "anu": 0,
                "paramanu": 0,
                "truti": 0,
                "liksha": 0,
                "vanshi": 0,
                "dhwanshi": 0.0000361,
                "trasrenu": 0,
                "yuka": 0,
                "maricha": 0.000217,
                "raja": 0,
                "rajika": 0.001302,
                "rakta sarshapa": 0,
                "sarshapa": 0.003906,
                "tandula": 0,
                "dhanyamasha": 0,
                "yava": 0.03125,
                "ratti": 0.125,
                "gunja": 0.125,
                "andika": 0,
                "suvarna mashaka": 0,
                "valla": 0,
                "nishpava": 0,
                "mashaka": 0.750,
                "hema": 0.750,
                "dhamaka": 0.750,
                "dhanyaka": 0,
                "masha": 0.750,
                "shana": 3,
                "tanka": 3,
                "nishka": 0,
                "kala": 0,
                "kola": 6,
                "kshudraka": 0,
                "kshudra": 6,
                "morataka": 6,
                "vataka": 0,
                "drankshana": 6,
                "badara": 0,
                "suvarna": 12,
                "dharana": 3,
                "karsha": 12,
                "panimanika": 12,
                "aksha": 12,
                "pichu": 12,
                "panitala": 12,
                "kinchitpani": 12,
                "tinduka": 12,
                "vidalpadaka": 12,
                "shodashika": 12,
                "karamadhya": 12,
                "hansapada": 12,
                "kavalagraha": 12,
                "udumbara": 12,
                "tola": 12,
                "nishkachatushtya": 0,
                "shukti": 24,
                "palardha": 0,
                "ardhapala": 24,
                "ashtamika": 24,
                "pala": 48,
                "mushti": 48,
                "amra": 0,
                "chaturthika": 48,
                "prakuncha": 48,
                "shodashi": 48,
                "bilva": 48,
                "prasrita": 96,
                "kudava": 192,
                "anjali": 192,
                "ardhasharavaka": 192,
                "ashtamana": 192,
                "manika": 384,
                "sharava": 384,
                "ashtapala": 384,
                "prastha": 768,
                "shubha": 0,
                "adhaka": 3072,
                "bhajana": 3072,
                "kansapatra": 3072,
                "patraka": 0,
                "tula": 4800,
                "drona": 12288,
                "kalasha": 12288,
                "nalvana": 12288,
                "armana": 12288,
                "unmana": 12288,
                "ghata": 12288,
                "rashi": 12288,
                "shurpa": 24576,
                "kumbha": 24576,
                "droni": 49152,
                "vahi": 49152,
                "goni": 49152,
                "bhara": 96000,
                "khari": 196608,
                "vaha": 0,
                "gram": 1,
                "kilogram": 1000
            },
            "time": {

            },
            "length": {
                
            }
        },
        "api": {
            "weight": {
                "anu": 0,
                "paramanu": 0,
                "truti": 0,
                "liksha": 0,
                "vanshi": 0,
                "dhwanshi": 0,
                "trasrenu": 0,
                "yuka": 0,
                "maricha": 0,
                "raja": 0,
                "rajika": 0,
                "rakta sarshapa": 0,
                "sarshapa": 0,
                "tandula": 0,
                "dhanyamasha": 0,
                "yava": 0,
                "ratti": 0.125,
                "gunja": 0.125,
                "andika": 0,
                "suvarna mashaka": 0,
                "valla": 0,
                "nishpava": 0,
                "mashaka": 0,
                "hema": 0,
                "dhamaka": 0,
                "dhanyaka": 0,
                "masha": 0,
                "shana": 0,
                "tanka": 0,
                "nishka": 0,
                "kala": 0,
                "kola": 0,
                "kshudraka": 0,
                "kshudra": 0,
                "morataka": 0,
                "vataka": 0,
                "drankshana": 0,
                "badara": 0,
                "suvarna": 0,
                "dharana": 0,
                "karsha": 12,
                "panimanika": 0,
                "aksha": 0,
                "pichu": 0,
                "panitala": 0,
                "kinchitpani": 0,
                "tinduka": 0,
                "vidalpadaka": 0,
                "shodashika": 0,
                "karamadhya": 0,
                "hansapada": 0,
                "kavalagraha": 0,
                "udumbara": 0,
                "tola": 12,
                "nishkachatushtya": 0,
                "shukti": 24,
                "palardha": 0,
                "ardhapala": 0,
                "ashtamika": 0,
                "pala": 48,
                "mushti": 0,
                "amra": 0,
                "chaturthika": 0,
                "prakuncha": 0,
                "shodashi": 0,
                "bilva": 0,
                "prasrita": 96,
                "kudava": 192,
                "anjali": 0,
                "ardhasharavaka": 0,
                "ashtamana": 0,
                "manika": 384,
                "sharava": 0,
                "ashtapala": 0,
                "prastha": 768,
                "shubha": 0,
                "adhaka": 3072,
                "bhajana": 0,
                "kansapatra": 0,
                "patraka": 0,
                "tula": 4800,
                "drona": 12288,
                "kalasha": 0,
                "nalvana": 0,
                "armana": 0,
                "unmana": 0,
                "ghata": 0,
                "rashi": 0,
                "shurpa": 24576,
                "kumbha": 0,
                "droni": 49152,
                "vahi": 49152,
                "goni": 0,
                "bhara": 96000,
                "khari": 196608,
                "vaha": 0,
                "gram": 1,
                "kilogram": 1000
            },
            "time": {
                "ksanas": 0,
                "lava": 0,
                "nimesha": 0,
                "kashtha": 4.66,
                "kala": 140,
                "ghati": 1440,
                "muhurta": 2880,
                "ahoratra": 86400,
                "paksha": 1296000,
                "masa": 2592000,
                "ritu": 5184000,
                "ayana": 15552000,
                "samvatsara": 31104000,
                "yuga": 155520000,
                "ahoratra deva": 31104000,
                "ahoratra pitra": 2592000,
                "second": 1,
                "minute": 60,
                "hour": 3600,
                "day": 86400,
                "month": 2592000,
                "year": 15552000
            },
            "length": {
                "yavodara": 0.24,
                "angula": 1.95,
                "vitasti": 22.86,
                "aratni": 41.91,
                "hasta": 45.72,
                "nripa hasta": 55.88,
                "rajhasta": 55.88,
                "vyama": 182.88,
                "metre": 100,
                "centimetre": 1,
                "kilometre": 100000,
                "inch": 2.54,
              	"millimetre": 0.1
            }
        }
    },
    "siddha": {
        "api": {
            "weight": {
                "grain": 0.065,
                "uluntu": 0.065,
                "kunri": 0.13,
                "yavam": 0.0325,
                "mancadi": 0.26,
                "masam": 0.78,
                "pana edai": 0.488,
                "varakan edai": 4.16,
                "kazancu": 5.12,
                "palam(pakka)": 41.6,
                "kahcu": 10.4,
                "kaica": 10.4,
                "tola": 11.7,
                "palam": 35,
                "cer": 280,
                "vicai": 1400,
                "tukku": 1750,
                "tulam": 3500,
                "gram": 1,
                "kilogram": 1000
            },
            "time": {
                "nodi": 1,
                "nazikai": 1440,
                "mukurttam": 5400,
                "yamam": 10800,
                "paksam": 1296000,
                "matam": 2592000,
                "mandalam": 3888000,
                "kalam": 5259492,
                "ayanam": 15778476,
                "second": 1,
                "minute": 60,
                "hour": 3600,
                "day": 86400,
                "month": 2592000,
                "year": 15552000
            },
            "length": {
                "virarkadai": 1.95,
                "can": 22.86,
                "muzam": 45.72,
                "pakam": 182.88,
                "metre": 100,
                "centimetre": 1,
                "kilometre": 100000,
                "inch": 2.54
            },
            "volume": {
                "normal": {
                    "nel": 0.093,
                    "codu": 33.6,
                    "azakku": 168,
                    "uzakku": 336,
                    "uri": 672,
                    "nazi": 1340,
                    "padi": 1340,
                    "kuruni": 5370,
                    "marakkal": 5370,
                    "patakku": 10700,
                    "mukkuruni": 16100,
                    "tuni": 21500,
                    "kalam": 64500,
                    "millilitre": 1,
                    "litre": 1000
                },
                "domestic": {
                    "tekkarandi": 3.697,
                    "kuppikarandi": 709.765,
                    "tirttakkarandi": 1.33,
                    "ney karanda": 4.0,
                    "uccikkarandi": 1.6,
                    "paladai": 30,
                    "enneykkarandi": 240,
                    "millilitre": 1,
                    "litre": 1000
                }
            }
        }
    },
    "unani": {
        "api": {
            "weight": {
                "grain": 0.01558,
                "chawal": 0.01558,
                "jo": 0.06332,
                "ratti": 0.125,
                "surkha": 0.125,
                "danga": 0.500,
                "masha": 0.970,
                "miskala": 4.5,
                "tola": 11.664,
                "rupya": 57.326,
                "aaqya": 350,
                "ratala": 468.5,
                "sera": 937,
                "gram": 1,
                "kilogram": 1000
            },
            "volume": {
                "tola": 12,
                "millilitre": 1,
                "litre": 1000
            }
        }
    }
};


app.intent('Default Fallback Intent', conv => {
  conv.ask(`I didn't understand`);
  conv.ask(`I'm sorry, can you try again?`);
});

app.intent('Default Welcome Intent', conv => {
  conv.ask('My name is Dialogflow!');
});

app.intent('Converter', (conv, {unitfrom, unitto, value}) => {
    //conv.ask(`Wow! I didn\'t know you knew ${unitfrom} yes`);
  	let unitfrom_value =  data_field[system][author][metric][unitfrom];
    let unitto_value = data_field[system][author][metric][unitto];
    if(typeof unitfrom_value === 'undefined') {
        conv.ask(`Enter correct FROM unit`);
    }
    else if(typeof unitto_value === 'undefined') {
        conv.ask(`Enter correct TO unit`);
    }
    else if(unitfrom_value === 0) {
      conv.ask(`${author} has not defined ${unitfrom} unit`);
    }
  	else if(unitto_value === 0) {
      conv.ask(`${author} has not defined ${unitto} unit`);
    }
    else {
  	    let answer = (value) * (unitfrom_value/unitto_value);
        conv.ask(`${value} ${unitfrom} is ${answer} ${unitto}`);
    }
});

app.intent('GlobalParameters', (conv, {global_system, global_author ,global_metric}) => {
	if(global_system != '')
  		system = global_system;
  	if(global_author != '')
  		author = global_author;
  	if(global_metric != '')
  		metric = global_metric;
  	conv.ask(`The parameters are set. Now you can convert values`);
});

app.intent('ShowGlobalParameters', conv => {
    conv.ask(`The selected global parameters are \n1) ${system} \n2) ${author}\n3) ${metric}`);
});


exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
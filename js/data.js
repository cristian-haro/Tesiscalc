/**
 * Marcas disponibles en el sistema
 */
export const BRANDS = [
  { id: 'gute', name: 'Gute' },
  { id: 'iberklin', name: 'Iberklin' }
];

/**
 * Base de datos de productos clasificados por marca (Gute e Iberklin)
 * con referencias cruzadas, coeficientes m y c y rutas a sus Fichas Técnicas (FT) y Fichas de Seguridad (FDS).
 */
export const CHEMICAL_DATA = [
  // ==========================================
  // MARCA: GUTE
  // ==========================================
  { 
    id: 'gute-g-forte', brand: 'gute', brandName: 'Gute', name: 'G-FORTE', code: 'I-202-A', m: 0.0546, c: -0.1998, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-FORTE.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-FORTE_ES.pdf'
  },
  { 
    id: 'gute-g-clorbox', brand: 'gute', brandName: 'Gute', name: 'G-CLORBOX', code: 'I-211', m: 0.1663, c: 0.0416, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-CLORBOX.pdf',
    fds: 'docs/Fichas Seguridad Gute/i1156_8896.pdf'
  },
  { 
    id: 'gute-g-tins', brand: 'gute', brandName: 'Gute', name: 'G-TINS', code: 'I-306', m: 0.0045, c: 0.3655, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-TINS.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-TINS_ES.pdf'
  },
  { 
    id: 'gute-g-desalcalis', brand: 'gute', brandName: 'Gute', name: 'G-DESALCALIS', code: 'I-308-A', m: 0.0491, c: -0.3285, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-DESALCALIS.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-DESALCALIS_ES.pdf'
  },
  { 
    id: 'gute-g-clorfoam', brand: 'gute', brandName: 'Gute', name: 'G-CLORFOAM', code: 'I-311-A', m: 0.3384, c: -0.0533, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-CLORFOAM.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-CLORFOAM_ES.pdf'
  },
  { 
    id: 'gute-g-foam', brand: 'gute', brandName: 'Gute', name: 'G-FOAM', code: 'I312-A', m: 0.7707, c: 0.0400, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-FOAM.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-FOAM_ES.pdf'
  },
  { 
    id: 'gute-g-energyfoam', brand: 'gute', brandName: 'Gute', name: 'G-ENERGYFOAM', code: 'I-313', m: 0.2786, c: -0.0314, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-ENERGYFOAM.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-ENERGYFOAM_ES.pdf'
  },
  { 
    id: 'gute-g-acidfoam', brand: 'gute', brandName: 'Gute', name: 'G-ACIDFOAM', code: 'I-314-A', m: 0.2449, c: -0.3613, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-ACIDFOAM.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-ACIDFOAM_ES.pdf'
  },
  { 
    id: 'gute-g-fortgras', brand: 'gute', brandName: 'Gute', name: 'G-FORTGRAS', code: 'I-370-A', m: 0.2452, c: 0.0099, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-FORTGRAS.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-FORTGRAS_ES.pdf'
  },
  { 
    id: 'gute-g-clor', brand: 'gute', brandName: 'Gute', name: 'G-CLOR', code: 'I-600-GB', m: 0.1446, c: -0.0694, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-CLOR.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-CLOR_ES.pdf'
  },
  { 
    id: 'gute-g-clor-plus', brand: 'gute', brandName: 'Gute', name: 'G-CLOR PLUS', code: 'I-601-G', m: 0.1640, c: -0.0374, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-CLOR PLUS.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-CLOR PLUS_ES.pdf'
  },
  { 
    id: 'gute-g-alcafer', brand: 'gute', brandName: 'Gute', name: 'G-ALCAFER', code: 'I-602-G', m: 0.1229, c: 0.0318, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-ALCAFER.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-ALCAFER_ES.pdf'
  },
  { 
    id: 'gute-g-acid', brand: 'gute', brandName: 'Gute', name: 'G-ACID', code: 'I-610-G', m: 0.0630, c: -0.0203, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-ACID.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-ACID_ES.pdf'
  },
  { 
    id: 'gute-g-acid-plus', brand: 'gute', brandName: 'Gute', name: 'G-ACID PLUS', code: 'I-611-G', m: 0.2535, c: -0.4996, traceable: true,
    ft: 'docs/Fichas Técnicas Gute/GUT-ACID-PLUS.pdf',
    fds: 'docs/Fichas Seguridad Gute/FDS_GUT-ACID PLUS_ES.PDF'
  },

  // ==========================================
  // MARCA: IBERKLIN
  // ==========================================
  { 
    id: 'iberklin-i-202-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-202-A', code: 'G-FORTE', m: 0.0546, c: -0.1998, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-202-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-202-A.pdf'
  },
  { 
    id: 'iberklin-i-211-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-211-A', code: 'G-CLORBOX', m: 0.1663, c: 0.0416, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-211-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-211-A.pdf'
  },
  { 
    id: 'iberklin-i-306-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-306-A', code: 'G-TINS', m: 0.0045, c: 0.3655, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-306-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-306-A.pdf'
  },
  { 
    id: 'iberklin-i-308-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-308-A', code: 'G-DESALCALIS', m: 0.0491, c: -0.3285, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-308-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-308-A.pdf'
  },
  { 
    id: 'iberklin-i-311-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-311-A', code: 'G-CLORFOAM', m: 0.3384, c: -0.0533, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-311-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-311-A.pdf'
  },
  { 
    id: 'iberklin-i-312-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-312-A', code: 'G-FOAM', m: 0.7707, c: 0.0400, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-312-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-312-A.pdf'
  },
  { 
    id: 'iberklin-i-313', brand: 'iberklin', brandName: 'Iberklin', name: 'I-313', code: 'G-ENERGYFOAM', m: 0.2786, c: -0.0314, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-313.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-313.pdf'
  },
  { 
    id: 'iberklin-i-314-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-314-A', code: 'G-ACIDFOAM', m: 0.2449, c: -0.3613, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-314-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-314.pdf'
  },
  { 
    id: 'iberklin-i-370-a', brand: 'iberklin', brandName: 'Iberklin', name: 'I-370-A', code: 'G-FORTGRAS', m: 0.2452, c: 0.0099, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-370-A.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-370-A.pdf'
  },
  { 
    id: 'iberklin-i-600-g', brand: 'iberklin', brandName: 'Iberklin', name: 'I-600-G', code: 'G-CLOR', m: 0.1446, c: -0.0694, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-600-G.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-600-G.pdf'
  },
  { 
    id: 'iberklin-i-601-g', brand: 'iberklin', brandName: 'Iberklin', name: 'I-601-G', code: 'G-CLOR PLUS', m: 0.1640, c: -0.0374, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-601-G.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-601-G.pdf'
  },
  { 
    id: 'iberklin-i-602-g', brand: 'iberklin', brandName: 'Iberklin', name: 'I-602-G', code: 'G-ALCAFER', m: 0.1229, c: 0.0318, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-602-G.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-602-G.pdf'
  },
  { 
    id: 'iberklin-i-610-g', brand: 'iberklin', brandName: 'Iberklin', name: 'I-610-G', code: 'G-ACID', m: 0.0630, c: -0.0203, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-610-G.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-610-G.pdf'
  },
  { 
    id: 'iberklin-i-610-ng', brand: 'iberklin', brandName: 'Iberklin', name: 'I-610-NG', code: 'I-610-NG', m: 0.0625, c: 0.0421, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-610-NG.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-610-NG.pdf'
  },
  { 
    id: 'iberklin-i-611-g', brand: 'iberklin', brandName: 'Iberklin', name: 'I-611-G', code: 'G-ACID PLUS', m: 0.2535, c: -0.4996, traceable: true,
    ft: 'docs/Fichas Técnicas Iberklin/I-611-G.pdf',
    fds: 'docs/Fichas Seguridad Iberklin/I-611-G.pdf'
  }
];

/**
 * Obtiene los productos correspondientes a una marca dada
 * @param {string} brandId - ID de la marca ('gute' | 'iberklin')
 * @returns {Array}
 */
export function getProductsByBrand(brandId) {
  if (!brandId) return [];
  return CHEMICAL_DATA.filter(chem => chem.brand === brandId);
}

/**
 * Obtiene la información del producto por su ID único
 * @param {string} searchKey 
 * @returns {object|null}
 */
export function getChemicalById(searchKey) {
  if (!searchKey) return null;
  return CHEMICAL_DATA.find(chem => 
    chem.id === searchKey || 
    chem.name === searchKey || 
    chem.code === searchKey
  ) || null;
}

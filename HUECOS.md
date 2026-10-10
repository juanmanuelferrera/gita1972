# Huecos verificados en gita_es.txt

Versos cuya TRADUCCIÓN falta o está corrupta en `gita_es.txt`. Encontrados al
citar versos para las fichas de ferrera.me, comprobando cada uno contra el
inglés de 1972 (`~/git_projects/bhagavad_gita.txt`, Macmillan 1972).

NO se han parcheado: rellenarlos con texto de otra edición (el castellano de
1975, o una traducción cotejada) metería en este fichero algo que no es lo que
dice esta fuente. Si alguna vez se rellenan, hay que marcar de dónde sale cada
línea.

| Verso | Qué pasa |
|---|---|
| 5.22 | Salta de `TEXTO 22` directo a `SIGNIFICADO`. No hay TRADUCCIÓN. El inglés sí está (línea 10635 de bhagavad_gita.txt). |
| 16.13-15 | Sale el devanagari y un trozo del palabra por palabra; la TRADUCCIÓN que aparece debajo corresponde al 16.16, no al 13-15. |

El español del 5.22 sí existe en `~/git_projects/gita_es_1975_JM/public/assets/data.json`,
en dos versiones: el OCR del castellano de 1975 (con erratas de escaneo) y la
traducción cotejada de Jagannātha Miśra. Ninguna de las dos es esta edición.

Conviene un repaso completo: si dos huecos aparecieron citando doce versos,
es probable que haya más.

## Más huecos (encontrados el 23 sep 2026)

| Verso | Qué pasa |
|---|---|
| 4.22 | No existe. En el capítulo cuatro faltan los marcadores TEXTO 15, 17 y 22. |
| 16.16 | No existe. El capítulo dieciséis salta de TEXTOS 13-15 a TEXTO 17. |

Con esto van cuatro huecos en unos treinta versos consultados. El fichero
necesita un cotejo verso a verso contra el inglés de 1972, no parches sueltos.

## Corrección (23 sep 2026)

El 4.37 SÍ existe: lo dio por ausente un extractor que exigía TRADUCCIÓN
inmediatamente tras el marcador, y en algunos versos se cuela el devanagari en
medio. Mismo motivo por el que el 16.23 pareció faltar y no falta.

Los huecos confirmados con un patrón tolerante son cuatro: **5.22, 16.13-15,
4.22 y 16.16**. En 16.13-15 el marcador existe pero lo que hay debajo es
devanagari y una TRADUCCIÓN que corresponde a otro verso.

Añadido el mismo día: **5.29** tiene el mismo defecto que el 5.22 — marcador
`TEXTO 29`, luego `SIGNIFICADO`, sin TRADUCCIÓN. Van cinco huecos confirmados:
5.22, 5.29, 4.22, 16.13-15 y 16.16.

**18.62** tiene el mismo defecto (marcador, luego SIGNIFICADO, sin TRADUCCIÓN).
Van seis: 5.22, 5.29, 4.22, 16.13-15, 16.16 y 18.62.
**2.33** igual: marcador, SIGNIFICADO, sin TRADUCCIÓN. Siete confirmados.
**12.18-19** faltan: el capítulo doce salta del TEXTO 17 al TEXTO 20. Ocho huecos.
**2.55** falta también: el capítulo dos salta del TEXTO 54 al 56. Nueve huecos.
**2.36** igual: el marcador `TEXTO 36` está seguido inmediatamente por `TEXTO 37`,
sin TRADUCCIÓN ninguna. Diez huecos confirmados.
**13.26** igual: marcador `TEXTO 26`, luego SIGNIFICADO, sin TRADUCCIÓN.
Once huecos confirmados.
**15.9** igual: `TEXTO 9` seguido inmediatamente de `TEXTO 10`. Doce huecos.
**14.9** igual: marcador `TEXTO 9`, luego SIGNIFICADO, sin TRADUCCIÓN. Trece huecos.
**5.24**, **8.20** y **8.22** igual: marcador sin TRADUCCIÓN (o marcador ausente).
Dieciséis huecos.
**2.10**, **4.17**, **10.29**, **12.5**, **13.16** y **13.26**: marcador sin
TRADUCCIÓN. Veintidós huecos confirmados.

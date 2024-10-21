# TypeBox 📦

### ¿Qué es TypeBox? 🤔

TypeBox es una biblioteca para JavaScript/TypeScript que actúa como un constructor de esquemas JSON con una característica especial: los esquemas creados pueden ser inferidos a tipos de TypeScript. En esencia, TypeBox es una herramienta que te permite definir una estructura de datos una sola vez, y usar esa definición tanto para la verificación de tipos de TypeScript como para la validación de datos en tiempo de ejecución. Esto simplifica el proceso de trabajar con datos estructurados en aplicaciones TypeScript, especialmente cuando se trata de APIs o manipulación de datos externos.

### ¿Para qué sirve TypeBox? 🛠️

- Crear esquemas JSON robustos y tipados. 📝
- Mantener la consistencia entre los tipos de TypeScript y la estructura de datos real. 🔄
- Validar la integridad de los datos en runtime. ✅

### ¿Por qué usar TypeBox? 🌟

- Inferencia de tipos 🧠
  - Genera automáticamente tipos TypeScript precisos a partir de esquemas JSON.
  - Reduce la duplicación de código y minimiza errores al unificar la definición de esquemas y tipos.

- Interoperabilidad Universal 🌍
  - Una de las características más poderosas de TypeBox es su completa compatibilidad con JSON Schema (Draft 7). Esto significa que los esquemas generados por TypeBox pueden exportarse fácilmente como JSON puro. Una vez exportados, estos esquemas son independientes de TypeBox y pueden utilizarse en cualquier contexto que soporte JSON Schema (Draft 7).
    
- Rendimiento 🚀
  - Compilación ultrarrápida de esquemas, superando significativamente a otras soluciones del mercado.
  - Validación de datos altamente eficiente, comparable o superior a las alternativas más rápidas disponibles.
  - Su compilador JIT (Just-In-Time) genera código de validación optimizado, ideal para aplicaciones que manejan grandes volúmenes de datos o requieren validaciones frecuentes.

### Ejemplos 💡

- Ejemplo 1 - Primitivos: Validación de tipos primitivos 🔢
- Ejemplo 2 - Arreglos y Objetos: Validación de tipos de arreglos, objetos y compuestos 📊
- Ejemplo 3 - Regex: Validación personalizada con expresiones regulares 🔍
- Ejemplo 4 - Compilación: Compilación de esquemas para un mayor rendimiento ⚡
- Ejemplo 5 - Wrapper: Clase Wrapper con diferentes utilidades 🎁

```typescript
┌────────────────────────────┬────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
│ (index)                    │ Iterations │ ValueCheck   │ Ajv          │ TypeCompiler │ Performance  │
├────────────────────────────┼────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
│ Literal_String             │ 1000000    │ '     17 ms' │ '      5 ms' │ '      5 ms' │ '    1.00 x' │
│ Literal_Number             │ 1000000    │ '     14 ms' │ '     18 ms' │ '      9 ms' │ '    2.00 x' │
│ Literal_Boolean            │ 1000000    │ '     14 ms' │ '     20 ms' │ '      9 ms' │ '    2.22 x' │
│ Primitive_Number           │ 1000000    │ '     17 ms' │ '     19 ms' │ '      9 ms' │ '    2.11 x' │
│ Primitive_String           │ 1000000    │ '     17 ms' │ '     18 ms' │ '     10 ms' │ '    1.80 x' │
│ Primitive_String_Pattern   │ 1000000    │ '    172 ms' │ '     46 ms' │ '     41 ms' │ '    1.12 x' │
│ Primitive_Boolean          │ 1000000    │ '     14 ms' │ '     19 ms' │ '     10 ms' │ '    1.90 x' │
│ Primitive_Null             │ 1000000    │ '     16 ms' │ '     19 ms' │ '      9 ms' │ '    2.11 x' │
│ Object_Unconstrained       │ 1000000    │ '    437 ms' │ '     28 ms' │ '     14 ms' │ '    2.00 x' │
│ Object_Constrained         │ 1000000    │ '    653 ms' │ '     46 ms' │ '     37 ms' │ '    1.24 x' │
│ Object_Vector3             │ 1000000    │ '    201 ms' │ '     22 ms' │ '     12 ms' │ '    1.83 x' │
│ Object_Box3D               │ 1000000    │ '    961 ms' │ '     37 ms' │ '     19 ms' │ '    1.95 x' │
│ Object_Recursive           │ 1000000    │ '   3715 ms' │ '    363 ms' │ '    174 ms' │ '    2.09 x' │
│ Tuple_Primitive            │ 1000000    │ '    107 ms' │ '     23 ms' │ '     11 ms' │ '    2.09 x' │
│ Tuple_Object               │ 1000000    │ '    375 ms' │ '     28 ms' │ '     15 ms' │ '    1.87 x' │
│ Composite_Intersect        │ 1000000    │ '    377 ms' │ '     22 ms' │ '     12 ms' │ '    1.83 x' │
│ Composite_Union            │ 1000000    │ '    337 ms' │ '     30 ms' │ '     17 ms' │ '    1.76 x' │
│ Math_Vector4               │ 1000000    │ '    137 ms' │ '     23 ms' │ '     11 ms' │ '    2.09 x' │
│ Math_Matrix4               │ 1000000    │ '    576 ms' │ '     37 ms' │ '     28 ms' │ '    1.32 x' │
│ Array_Primitive_Number     │ 1000000    │ '    145 ms' │ '     23 ms' │ '     12 ms' │ '    1.92 x' │
│ Array_Primitive_String     │ 1000000    │ '    152 ms' │ '     22 ms' │ '     13 ms' │ '    1.69 x' │
│ Array_Primitive_Boolean    │ 1000000    │ '    131 ms' │ '     20 ms' │ '     13 ms' │ '    1.54 x' │
│ Array_Object_Unconstrained │ 1000000    │ '   2821 ms' │ '     62 ms' │ '     45 ms' │ '    1.38 x' │
│ Array_Object_Constrained   │ 1000000    │ '   2958 ms' │ '    119 ms' │ '    134 ms' │ '    0.89 x' │
│ Array_Object_Recursive     │ 1000000    │ '  14695 ms' │ '   1621 ms' │ '    635 ms' │ '    2.55 x' │
│ Array_Tuple_Primitive      │ 1000000    │ '    478 ms' │ '     35 ms' │ '     28 ms' │ '    1.25 x' │
│ Array_Tuple_Object         │ 1000000    │ '   1623 ms' │ '     63 ms' │ '     48 ms' │ '    1.31 x' │
│ Array_Composite_Intersect  │ 1000000    │ '   1582 ms' │ '     43 ms' │ '     30 ms' │ '    1.43 x' │
│ Array_Composite_Union      │ 1000000    │ '   1331 ms' │ '     76 ms' │ '     40 ms' │ '    1.90 x' │
│ Array_Math_Vector4         │ 1000000    │ '    564 ms' │ '     38 ms' │ '     24 ms' │ '    1.58 x' │
│ Array_Math_Matrix4         │ 1000000    │ '   2382 ms' │ '    111 ms' │ '     83 ms' │ '    1.34 x' │
└────────────────────────────┴────────────┴──────────────┴──────────────┴──────────────┴──────────────┘
```
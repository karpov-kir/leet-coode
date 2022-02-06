type GetArrayElementType<T extends any[]> = T extends (infer U)[] ? U : never;

type NonEmptyArray<T> = [T, ...T[]];

package com.ignited.coprime;

public class Coprime {

    public static int gcd(int a, int b){

        if(a == 0 || b ==0) return 0;
        int c;
        while(b != 0){
            c = a % b;
            a = b;
            b = c;
        }

        return a;
    }

    public static boolean isCoprime(int a, int b){
        return gcd(a, b) == 1;
    }

    public static int coprimePair(int range){
        int count = 0;
        for (int i = 1;i<= range;++i){
            for(int j = 1; j<= range; ++j){
                if(isCoprime(i,j)) ++count;
            }
        }
        return count;
    }

}

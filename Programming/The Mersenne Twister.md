## The Mersenne Twister

`메르센 트위스터`는 엑셀, MATLAB, PHP, Python, R, C++ 등에서 사용하고 있는 난수 생성 알고리즘이며, 1997년에 `마츠모토 마코토`와 `니시무라 다쿠지`가 개발한 알고리즘이다. 메르센 트위스터라는 이름은 이 알고리즘의 난수 반복 주기가 `메르센 소수`인데서 유래했다Mersenne 소수를 결정하기 위해 다음과 같이 시도할 수 있다. `메르센 수`는 Mn=2n−1Mn=2n−1으로 나타내며 식 그대로 `2의 제곱에서 1이 모자란 수`를 말하는 것이고 `메르센 소수`는 그냥 이 메르센 수 중에서 소수인 것을 고른 것이다. 보통 219937−1219937−1의 난수 반복 주기를 가지는 `MT19937`이 많이 사용되는데, C++에서도 이 알고리즘을 채택해서 사용하고 있다. 이 알고리즘의 동작 원리를 간단하게 설명하면 다음과 같다.

![img](https://miro.medium.com/max/700/0*ckd9ZABbC6qfpI-s)

![img](https://miro.medium.com/max/700/1*eevrzBpnm4H7TLvB2mgzkw.png)

Mersenne 순서는 다음과 같은 형태를 띈다.

```python
2, 3, 5, 7, 13, 17, 19, 31, 61, 89, 107, 127, 521, 607, 1279, 2203, 2281, 3217, 4253, 4423, 9689, 9941, 11213, 19937, 21701, 23209, 44497, 86243, 110503, 132049, 216091, 756839, 859433, 1257787, 1398269, 2976221, 3021377, 6972593, 13466917, 20996011, 24036583, 25964951, 30402457, 32582657, 37156667, ..., 77232917 ...
```

일반적으로 사용되는 값은 19,937  (2¹⁹⁹³⁷-1)다. The Mersenne Twister의 강점은 숫자를 생성할 때 (2¹⁹⁹³⁷-1)확률로 난수가 반복되지 않는 다는 점이다.

![img](https://miro.medium.com/max/700/1*pIfTP-5X44UHMYo7Nks-pw.png)

전반적으로 이 함수는 순차적 상태를 사용해서 현재 상태에서 다음에 나올 값을 알 수 없어야 한다. 하지만 몇몇 연구에서는 아주 드물게 다음 상태를 예측할 수 있는 경우가 있고, 1 혹은 0이 거의 없는 곳에서는 거의 불가능한 것으로 간주된다. 이 방법은 상태에 대해 너무 많은 비트(19,937)를 사용하고 보안을 위해 상태 값이 256비트이면 충분하지만 메서드의 전반적인 성능에 큰 영향을 미친다는 점에서 비판받아 왔다. 2²²²²²의 유사 시퀀스가 여전히 안전한 것으로 볼 수 있다.

The Mersennes Twister를 Python 언어를 이용해 구현하면 다음과 같은 형태를 띈다.

- **w**: word size (비트수)
- **n**: degree of recurrence (반복 정도)
- **m**: middle word, an offset used in the recurrence relation defiting the series x, 1 ≤ m < n (중간에 우치한 숫자로써  1 ≤ m < n을 정의하는 반복 관계에 사용되는 상쇄값)
- **r**: separation point of one word, or the number of bits of the lower bitmask, 0 ≤ r ≤ w — 1 (한 숫자의 분리점 혹은 비트 수)
- **a**: coefficients of the relational normal form twist matrix (정규 형태의 꼬임 행렬의 계수)
- **b**, **c**: TGFSR(R) tempering bitmasks (탬퍼링 비트 마스크)
- **s, t:** TGFSR(R) tempering bit shifts (탬퍼링 비트 변환)
- **u, d, l**: additional Mersenne Twister tempering bit shifts/masks (탬퍼링 비트 전환 및 숨김)

```python
class mersenne_rng(object):
    '''
    아래 값들은 MT19937의 표준 계수로 정해져 있는 수다.
    f = 1812433253
    b = 0x9D2C5680
    seed = 5489 (5489 길이 만큼을 가진 백터를 생성 (5489개의 유사 난수를 생성))
    '''

    def __init__(self, seed=5489):
        self.state = [0]*624
        self.f = 1812433253
        self.m = 397
        self.u = 11
        self.s = 7
        self.b = 0x9D2C5680  # 2636928640
        self.t = 15
        self.c = 0xEFC60000  # 4022730752
        self.l = 18
        self.index = 624
        self.lower_mask = (1 << 31)-1
        self.upper_mask = 1 << 31

        # update state
        self.state[0] = seed
        for i in range(1, 624):
            self.state[i] = self.int_32(
                self.f*(self.state[i-1] ^ (self.state[i-1] >> 30)) + i)

    # state[1:624] 상태를 전부 업데이트한다.
    def twist(self):
        for i in range(624):
            temp = self.int_32(
                (self.state[i] & self.upper_mask)+(self.state[(i+1) % 624] & self.lower_mask))
            temp_shift = temp >> 1
            if temp % 2 != 0:
                temp_shift = temp_shift ^ 0x9908b0df
            self.state[i] = self.state[(i+self.m) % 624] ^ temp_shift
        self.index = 0

   # index의 값이 현 상태의 크기를 넘으면 다시 twist해주고, 그렇지 않으면 비트 연산 값을 리턴한다
    def gen_random_int(self):
        if self.index >= self.index:
            self.twist()

        y = self.state[self.index]
        y = y ^ (y >> self.u)
        y = y ^ ((y << self.s) & self.b)
        y = y ^ ((y << self.t) & self.c)
        y = y ^ (y >> self.l)

        self.index += 1

        return self.int_32(y)

    def get_random_number(self):
        if self.index >= 624:
            self.twist()
        y = self.state[self.index]
        y = y ^ (y >> self.u)
        y = y ^ ((y << self.s) & self.b)
        y = y ^ ((y << self.t) & self.c)
        y = y ^ (y >> self.l)
        self.index += 1
        return self.int_32(y)

    def int_32(self, number):
        return int(0xFFFFFFFF & number)

    # 0.0부터 1.0보다 작은 실수 값을 반환
    def random(self):
        """ return uniform distribution in [0, 1) """

        # 0xFFFFFFFF + 1 = 4294967296
        return self.gen_random_int() / 4294967296

    def randrange(self, a, b):
        """ return random int in [a, b)"""
        n = self.random()
        return int(n / (1 / (b / a)) + a)

    def randint(self, a, b):
        return self.randrange(a, b + 1)


if __name__ == "__main__":
    rng = mersenne_rng(seed=124)
    for i in range(3):
        print(rng.gen_random_int())
    print(rng.random())
    print("Random Range [a, b)")
    for i in range(10):
        print(rng.randrange(1, 10), end=" ")
    print("\nRandom Int [a, b]")
    for i in range(10):
        print(rng.randint(1, 10), end=" ")
```


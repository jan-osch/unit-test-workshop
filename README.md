# unit-test-workshop
## Po co testy?
* Testy są dobre
* [Testy poprawiają jakość kodu](https://www.infoq.com/news/2009/03/TDD-Improves-Quality)
* Pozwalają uruchomić kawałek kodu w izolacji
* Zapewniają dokumentację do kodu
* Dają pewność przy wprowadzaniu zmian - umożliwiają refactoring
* Testy sprawdzają też środowisko w którym są uruchamiane, wersje, zależności, polyfille itp
* **Programista powinien pisać testy jednostkowe do swojego kodu tak aby tworzony kod był łatwy do przetestowania**
* Testy jednostkowe, integracyjne, systemowe, akceptacyjne?
* Piramida testowania

## Podstawowe narzędzia:
* mocha - test runner
* chai - assertion library
* sinon - mocking

## mocha
* `describe` to zestaw testów - powinna dzielić testy na domeny
* `it` to pojedynczy przypadek testowy
* only, x 
* aby ustawić timeout - musisz użyć `function` jako callbacka

## chai
* expect 
* dzielisz test na given, when, then

## sinon
* spy - obserwuje jakiś kawałek kodu
* stub - podmienia implementację 
* zawsze używaj `sandbox` i `restore`
 
## Supertest
* eksportujemy router i testujemy in memory
* używamy expecta wbudowanego
 
## Kiedy pisać testy?
* Gdy mamy jasno zdefiniowane wymagania - test first - używamy TDD
* Gdy poszukujemy, test after
* Ale testuj

## Kod który ciężko przetestować:
* Kod który ciężko uruchomić - kod w kontrolerach, callbackach na kolejce - hooki w mongoosie - kod który ma dużo zależności 
* Kod który wychodzi poza runtime - np sięga do bazy danych, do zewnetrznego serwisu, do systemu plików
* Kod który opiera się na side efektach - na zasadzie input/output

## Jak pisać kod łatwiejszy do przetestowania?
* Wydzielić logikę do osobnych serwisów, publicznie dostępnych metod
* Dzielimy aplikację na warstwy abstrakcji
* "Don't Mock What You Don't Own". Buduj wrappery na zewnętrzne zależności
* Zdefiniować co jest publiczne co jest prywatne w kodzie - testować tylko przez publiczny interfejs

## Przydatne narzędzia
* eslint --fix
* precommit
* istanbul, nyc
* stryker

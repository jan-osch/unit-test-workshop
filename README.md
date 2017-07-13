# unit-test-workshop


* always use rewire `revert`
* always use sinon `sandbox` and `restore`
* when using mocha return promises in from the `it`


## Testy jednostkowe
## Po co testy?
* Testy są dobre
* Pozwalają uruchomić kawałek kodu w izolacji
* Zapewniają dokumentację do kodu
* Dają pewność przy wprowadzaniu zmian - umożliwiają refactoring
* Testy sprawdzają też środowisko w którym są uruchamiane, wersje, zależności, polyfille itp
* **Programista powinien pisać testy jednostkowe do swojego kodu tak aby tworzony kod był łatwy do przetestowania**

## Podstawowe narzędzia:
* mocha - test runner
* chai - assertion library
* sinon - mocking

## mocha
* only, x i tak dalej

## Testy jednostkowe, integracyjne, systemowe, akceptacyjne?


## Kiedy pisać testy?
* Gdy mamy jasno zdefiniowane wymagania - test first - używamy TDD
* Gdy poszukujemy, test after
* Ale testuj!

## Kod który ciężko przetestować:
* Kod który ciężko uruchomić - kod w kontrolerach, callbackach na kolejce - hooki w mongoosie - kod który ma dużo zależności 
* Kod który wychodzi poza runtime - np sięga do bazy danych, do zewnetrznego serwisu, do systemu plików
* Kod który opiera się na side efektach - na zasadzie input/output

## Jak pisać kod łatwiejszy do przetestowania?
* Wydzielić logikę do osobnych serwisów, publicznie dostępnych metod
* Zdefiniować co jest publiczne co jest prywatne w kodzie - testować tylko przez publiczny interfejs

## Przydatne narzędzia
* eslint --fix
* precommit
